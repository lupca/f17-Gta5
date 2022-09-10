import React, {useEffect, useState} from "react";
import "./discount.scss";
import { Card } from "@mui/material";
import Images from "assets/images";


const Discount = () => {  
  
  return (
    <div  variant="outlined">
      <div variant="outlined" className="payment-form__discount-title">
          Nạp F17coin
      </div>
      <div variant="outlined" className="payment-form__discount-momo">
        <img  src={Images.PaymentMethod.Momo} alt="F17" />
        <p className='payment-form__momo-content'>
          Khuyến mãi 10% VND khi nạp trên 550 Fcoin (Áp dụng cho cả Paypal)
        </p>
      </div>
    </div>
  );
}

export default Discount;
