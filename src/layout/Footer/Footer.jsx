import { Container } from "@mui/material";
import Images from "assets/images";
import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      Footer
      <Container maxWidth="xl">
        <img src={Images.LOGO} alt="F17" />
      </Container>
    </footer>
  );
};

export default Footer;
