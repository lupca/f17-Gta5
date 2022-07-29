import MainLayout from "layout/MainLayout";
import React from "react";
import Images from "assets/images";
import "./Payment.scss";
import { Container } from "@mui/material";

const Payment = () => {
  return (
    <MainLayout>
      <div
        className="payment"
        style={{
          backgroundImage: `url(${Images.HeroBanner})`,
        }}
      >
        <Container maxWidth="xl">
          <div className="content">Payment</div>
        </Container>
      </div>
    </MainLayout>
  );
};

export default Payment;
