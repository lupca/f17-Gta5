import React, {useState} from "react";
import {Element} from "react-scroll";
import {Carousel} from '3d-react-carousal';
import {Container} from "@mui/material";
import './Features.scss'
import Images from "assets/images";

const Features = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const onSlideChange = function (index) {
    console.log("callback", index);
    setSelectedImage(index)
  }
  let slides = Images.Features.map((image, index) => <img key={index} src={image.image} alt={image.content} />)
  return (
    <Element name="features" className="element">
      <div className="wrap-feature" style={{minHeight: "100vh"}}>
        <Carousel slides={slides} onSlideChange={onSlideChange} />
        <p style={{marginTop: 26}}>
          {Images.Features[selectedImage].content}
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
