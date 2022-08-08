import React from "react";
import "./discount.scss";
import { Card } from "@mui/material";
import Images from "assets/images";

const Discount = () => {
  return (
    <Card variant="outlined" >
    <div variant="outlined" className="payment-form__discount-momo">
      <img  src={Images.PaymentMethod.Momo} alt="F17" />
    </div>
      Khuyến mãi 10% VND khi nạp trên 550 Fcoin (Áp dụng cho cả Paypal)
    </Card>
  );
}

export default Discount;
