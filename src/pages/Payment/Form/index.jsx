import React from "react";
import "./form.scss";
import { Grid, Card } from "@mui/material";
import Discount from "./Discount";

const PaymentForm = () => {
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    className="payment-form"
    >
      <Grid item xs={3}>
        <Card variant="outlined">
          <Discount/>
        </Card>
      </Grid>   
    </Grid> 
  );
}

export default PaymentForm;
