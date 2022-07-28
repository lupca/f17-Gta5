import React from "react";
import PropTypes from "prop-types";
import Images from "assets/images";
import "./HeroBanner.scss";
import { Collapse, Grow, IconButton } from "@mui/material";
import { Link as Scroll } from "react-scroll";
function HeroBanner(props) {
  return (
    <div
      id="home"
      className="hero-banner"
      style={{
        backgroundImage: `url(${Images.HeroBanner})`,
      }}
    >
      <Collapse orientation="horizontal" in={true}>
        {/* <p className="hero-banner-title">THÀNH PHỐ F17</p> */}
      </Collapse>
      <div id="scroll-down-animation">
        <Scroll to="features" smooth={true}>
          <span className="mouse">
            <span className="move"></span>
          </span>
        </Scroll>
      </div>
    </div>
  );
}

HeroBanner.propTypes = {};

export default HeroBanner;
