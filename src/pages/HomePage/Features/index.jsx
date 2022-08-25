import React, {useState} from "react";
import {Element} from "react-scroll";
import {Carousel} from '3d-react-carousal';
import './Features.scss'
import Images from "assets/images";
import FeatureDetail from "./FeatureDetail";

let slides = Images.Features.map((image, index) => <img key={index} src={image.image} alt={image.content} />)

const Features = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const onSlideChange = function (index) {
    setSelectedImage(index)
  }
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
      <FeatureDetail />
    </Element>
  );
};

export default Features;
