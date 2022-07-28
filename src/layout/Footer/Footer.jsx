import React from "react";
import { Button } from "@mui/material";
import { animateScroll } from "react-scroll";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const scroll = animateScroll;
const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div>
      Footer
      <div id="back-to-top" onClick={scrollToTop}>
        <ExpandLessIcon />
      </div>
    </div>
  );
};

export default Footer;
