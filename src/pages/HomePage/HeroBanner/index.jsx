import React from "react";
import Images from "assets/images";
import "./HeroBanner.scss";
import {Collapse, Container} from "@mui/material";
import {Link as Scroll} from "react-scroll";
function HeroBanner(props) {
  return (
    <div
      id="home"
      className="hero-banner"
      style={{
        backgroundImage: `url(${Images.HeroBanner})`,
      }}
    >
      <Container maxWidth="lg">

        <div id="scroll-down-animation">
          <Scroll to="features">
            <span className="mouse">
              <span className="move"></span>
            </span>
          </Scroll>
        </div>
      </Container>
    </div>
  );
}

HeroBanner.propTypes = {};

export default HeroBanner;
