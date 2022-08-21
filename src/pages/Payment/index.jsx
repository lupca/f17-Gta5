import MainLayout from "layout/MainLayout";
import React from "react";
import Images from "assets/images";
import "./Payment.scss";
import {Container} from "@mui/material";
import PaymentForm from "./Form"

const Payment = () => {
  return (
    <MainLayout>
      <div
        className="payment"
        style={{
          backgroundImage: `url(${Images.BgBanner})`,
        }}
      >
        <Container maxWidth="xl">
          <div className="content">
            <PaymentForm />
          </div>
        </Container>
      </div>
    </MainLayout>
  );
};

export default Payment;
