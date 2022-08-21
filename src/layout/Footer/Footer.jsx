import {Container} from "@mui/material";
import Images from "assets/images";
import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="xl">

        <p>Liên kết mạng xã hội</p>
        <div className="list-social">
          <img src={Images.LOGO} alt="F17" />
        </div>

      </Container>
    </footer>
  );
};

export default Footer;
