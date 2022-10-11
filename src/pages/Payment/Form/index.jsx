import React, {useEffect, useState} from "react";
import "./form.scss";
import {Grid, Box, Typography, Modal, InputBase, Divider} from "@mui/material";
import {Button, Card, InputLabel, MenuItem, FormControl} from "@mui/material";
import {IconButton, TextField} from "@mui/material";
import {Snackbar, Alert, FormHelperText} from "@mui/material";
import Discount from "./Discount";
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Close from '@mui/icons-material/Close';
// import PaymentMomoApi from "api/payments/paymentmomo.api"
import PaymentPaypalApi from "api/payments/paypal.api"
import UserApi from "api/user.api";
import Select from '@mui/material/Select';
import DenominationVND from "./Denominations/DenominationVND"
import DenominationUSD from "./Denominations/DenominationUSD"
import CurrencyConversionService from "../../../service/CurrencyConversion"
import {PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";
import {Container} from "@mui/material";
import Paper from "@mui/material/Paper";
import SearchIcon from '@mui/icons-material/Search';

const vertical = 'top'
const horizontal = 'right'

const PaymentForm = () => {
    const [citizenId, setCitizenId] = useState('')
    const [player, setPlayer] = useState({})
    const [fcoin, setFcoin] = React.useState(0);
    const [openModal, setOpenModal] = React.useState(false);
    const [denominations, setDenominations] = React.useState('');
    const [openNotice, setOpenNotice] = React.useState(false);
    const [messageNotice, setMessageNotice] = React.useState('');
    const [momoPayData, setMomoPayData] = React.useState({});
    const [helperTextFcoin, setHelperTextFcoin] = React.useState('Vui lòng nhập fcoin!');
    const [fcoinError, setFcoinError] = React.useState(true)
    const [severityAlert, setSeverityAlert] = React.useState('error')
    useEffect(() => {
    }, [])

    const createOrder = (data, actions) => {
        const ccService = new CurrencyConversionService(fcoin, 'USD')
        const amount = ccService.perform()

        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: amount,
                    },
                },
            ],
        });
    }
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (orderData) {
            const transaction = orderData.purchase_units[0].payments.captures[0];
            const payer = orderData.payer
            const amount = transaction?.amount?.value || 0
            const currencyCode = transaction?.amount?.currency_code || "USD"
            const paypal = new PaymentPaypalApi()
            const dataCB = {
                tranId: orderData.id,
                ackTime: orderData.create_time,
                amount,
                currencyCode,
                status: orderData.status,
                partnerId: payer.payer_id,
                citizenId: citizenId.replace('/', ''),
                fcoin: fcoin
            }

            paypal.loadPaymentPayPal(dataCB).then(() => {
                noticeWith("Cảm ơn bạn. Vui lòng kiểm tra lại thông tin fcoi của nhân vật.", 'success')
                setOpenModal(false);
            })
        });
    }
    const submitPayment = () => {
        const isValid = validateForm()
        if (isValid) handleOpenModal()
        // const momoQR = paymentViaMomo
        // setContentModal(momoQR)
    }

    const handleOpenModal = () => {
        switch (denominations) {
            case "VND":
                paymentViaMomo()
                break;
            case "USD":
                // setPay
                break;
        }
        setOpenModal(true);
    }
    const handleCloseModal = () => setOpenModal(false);

    const noticeWith = (message, severity) => {
        setSeverityAlert(severity || 'error')
        setOpenNotice(true);
        setMessageNotice(message)
    }

    const handleFcoinChange = (e) => {
        const fcoinValue = e.target.value
        if (!fcoinValue) {
            setHelperTextFcoin("Vui lòng nhập số Fcoin")
            setFcoinError(true);
        } else if (fcoinValue < 10) {
            setHelperTextFcoin("Số Fcoin nạp phải lớn hơn 10")
            setFcoinError(true);
        } else if (fcoinValue > 10 && (fcoinValue % 10) !== 0) {
            setHelperTextFcoin("Số Fcoin phải là bội số của 10")
            setFcoinError(true);
        } else {
            setHelperTextFcoin('');
            setFcoinError(false);
            setFcoin(fcoinValue)
        }
    }

    const validateForm = () => {
        if (!citizenId) {
            noticeWith("Nhân vật không xác định.")
            return false;
        }

        if (fcoinError || !denominations) return false

        return true
    }

    function paymentViaMomo() {
        const ccService = new CurrencyConversionService(fcoin, 'vnd')
        const amount = ccService.perform()
        const momoData = {
            phone: process.env.REACT_APP_PHONE_MOMO,
            note: citizenId.replace('/', '').toLowerCase(),
            amount,
        }

        setMomoPayData(momoData)
    }

    function onclickCheckUser() {
        const user = new UserApi()
        if (citizenId === '/' || citizenId === '') {
            return noticeWith("Nhân vật không được để trống.")
        }

        user.setParamsToUrl().searchBy({citizenId: citizenId})
            .then(response => {
                console.log(response)
                if (response.code === 201) {
                    setPlayer({})
                    noticeWith("Nhân vật không tồn tại.")
                } else {
                    setOpenNotice(false)
                    setPlayer(response.data)
                }
            })
    }

    const handleNoticeClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setOpenNotice(false);
    };

    const actionNotice = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleNoticeClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleNoticeClose}
            >
                <Close fontSize="small"/>
            </IconButton>
        </React.Fragment>
    );

    return (
        <Container
            className="payment-form"
            maxWidth="md"
        >
            <Snackbar
                anchorOrigin={{vertical, horizontal}}
                open={openNotice}
                autoHideDuration={6000}
                onClose={handleNoticeClose}
                action={actionNotice}
            >
                <Alert severity={severityAlert}>{messageNotice}</Alert>
            </Snackbar>
            <Grid item sx={{mb: 3}}>
                <Card variant="outlined" sx={{p: 2, borderRadius: "1rem"}}>
                    <Discount/>
                    <Paper
                        component="form"
                        sx={{p: '2px 4px', display: 'flex', alignItems: 'center'}}
                        className="payment-form__discount-check-user"
                    >
                        <IconButton sx={{p: '10px'}} aria-label="menu">
                            <PersonIcon/>
                        </IconButton>
                        <InputBase
                            sx={{ml: 1, flex: 1}}
                            placeholder="Search ID nhân vật"
                            inputProps={{'aria-label': 'search ID nhân vật'}}
                            type="text"
                            onChange={event => setCitizenId('/' + event.target.value)}
                            name="citizenid"
                        />
                        <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>
                        <IconButton onClick={(e) => onclickCheckUser()} type="button" sx={{p: '10px'}}
                                    aria-label="search">
                            <SearchIcon/>
                        </IconButton>
                    </Paper>

                    {player ? <strong><p className='payment-form__player-name'> {player.name} </p></strong> : <></>}
                    <FormControl variant="standard" sx={{mt: 1, minWidth: 120, width: "100%"}}>
                        <InputLabel id="demo-simple-select-standard-label">Chọn phương thức thanh toán</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={denominations}
                            onChange={(e) => {
                                setDenominations(e.target.value)
                            }}
                            label="method payment"
                            error={!denominations}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"USD"}>Paypal</MenuItem>
                            <MenuItem value={"VND"}>Momo</MenuItem>
                        </Select>
                        <FormHelperText
                            error={!denominations}>{!denominations ? "Vui lòng chọn phương thức thanh toán!" : ''}</FormHelperText>

                    </FormControl>
                    {denominations === 'VND' ? <DenominationVND/> : <DenominationUSD/>}
                    <TextField
                        type="number"
                        pattern='[0-9]*'
                        onChange={handleFcoinChange}
                        error={fcoinError}
                        sx={{mt: 3, width: "100%"}}
                        label="Số fcoin muốn nạp"
                        InputProps={{
                            endAdornment: (
                                <AttachMoneyIcon/>
                            )
                        }}
                    />
                    <FormHelperText error={fcoinError}>{helperTextFcoin}</FormHelperText>
                    <Button sx={{mt: 3, float: "right"}} onClick={submitPayment} variant="contained">Tiếp tục</Button>

                </Card>
            </Grid>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="modal"
            >
                <Box sx={modalStyle}>
                    <Typography id="modal-modal-title" className="modal__modal-title" variant="h6" component="h2"
                                textAlign={'center'}>
                        {denominations === 'VND' ? "THANH TOÁN VỚI MOMO" : "Thanh toán với paypal"}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        {denominations === 'VND' ?
                            <div>
                                <img
                                    src={`https://momosv3.apimienphi.com/api/QRCode?phone=${momoPayData.phone}&amount=${momoPayData.amount}&note=${momoPayData.note}`}/>
                                <Typography sx={{mt: 1}}>Bạn cần phải chuyển {momoPayData.amount} VND để
                                    nhận {fcoin} fcoin.</Typography>
                            </div>
                            :
                            <PayPalScriptProvider options={{"client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID}}>
                                <PayPalButtons style={{layout: "horizontal"}}
                                               createOrder={(data, actions) => createOrder(data, actions)}
                                               onApprove={(data, actions) => onApprove(data, actions)}/>
                            </PayPalScriptProvider>
                        }
                    </Typography>
                </Box>
            </Modal>
        </Container>
    );
}

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default PaymentForm;
