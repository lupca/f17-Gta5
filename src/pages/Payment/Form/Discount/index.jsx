import React, {useEffect, useState} from "react";
import "./discount.scss";
import { Card } from "@mui/material";
import Images from "assets/images";
import UserApi from "api/user.api";
//import { mdiAccount } from '@mdi/js';
import PersonIcon from '@mui/icons-material/Person';


const Discount = () => { 
  const [mounted, setMounted] = useState(false);
  const [emptyCitizenId, setemptyCitizenId] = useState(false);
  const [citizenId, setCitizenId] = useState('')

  function onclickCheckUser (citizenId) {
    const user = new UserApi()
    if (citizenId == '/' ||citizenId == ''  ) {
      setemptyCitizenId (true)
      setMounted(false)
      return
    }
    setemptyCitizenId (false)
    user.setParamsToUrl().searchBy({citizenId: citizenId})
    .then(data => {
      if (data.code == 201){
        setMounted(true)
      }
      else {
        setMounted(false)
      }
    })  
  }
  
  return (
    <Card  variant="outlined" >
      <div variant="outlined" className="payment-form__discount-title">
          Nạp F17coin
      </div>
      <div variant="outlined" className="payment-form__discount-momo">
        <img  src={Images.PaymentMethod.Momo} alt="F17" />
        <p className='payment-form__momo-content'>
          Khuyến mãi 10% VND khi nạp trên 550 Fcoin (Áp dụng cho cả Paypal)
        </p>
      </div>
      <div className="payment-form__discount-check-user">
        <span className="payment-form__img" id="basic-addon1">
          <PersonIcon className="payment-form__discount-icon"/>
        </span>
        <input type="text" onChange={event => setCitizenId('/' + event.target.value)} className="payment-form__discount-citizenid" placeholder="ID nhân vật" name="citizenid" aria-label="Username" aria-describedby="basic-addon1" />
        <button onClick={(e) => onclickCheckUser(citizenId, e)} className="payment-form__discount-btlchecking-user" type="button" data-mdb-ripple-color="dark">
          Check
        </button>
      </div>
      {
        mounted ? 
          <p className='payment-form__discount-check'>
            Nhân vật không tồn tại
          </p>
        :
          <></>
      }
      {
        emptyCitizenId ? 
          <p className='payment-form__discount-checkmpty'>
            Vui lòng nhập tên nhân vật
          </p>
        :
          <></> 
      }
    </Card>
  );
}

export default Discount;
