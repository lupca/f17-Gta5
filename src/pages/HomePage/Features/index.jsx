import React from "react";
import {Element} from "react-scroll";
import {Carousel} from '3d-react-carousal';
import {Container} from "@mui/material";
import './Features.scss'
import Images from "assets/images";

const Features = () => {
  const onSlideChange = function (index) {
    console.log("callback", index);
  }
  let slides = Images.Features.map((image, index) => <img key={index} src={image} alt={index} />)
  return (
    <Element name="features" className="element">
      <div className="wrap-feature" style={{minHeight: "100vh"}}>Features
        <Carousel slides={slides} onSlideChange={onSlideChange} />
        <p style={{marginTop: 26}}>
          Each round, you and 15 other contestants
          compete to
          escape a deadly island filled with monsters.

        </p>
        <div className="divider">
          <div className="item pink"></div>
          <div className="item blue"></div>
          <div className="item cyan"></div>
        </div>
      </div>
    </Element>
  );
};

export default Features;
