import Images from "assets/images";
import Footer from "layout/Footer/Footer";
import MainLayout from "layout/MainLayout";
import React from "react";
import Features from "./Features";
import HeroBanner from "./HeroBanner";
import './HomePage.scss'
import HowToJoin from "./HowToJoin/HowToJoin";
import Introduction from "./Introduction/Introduction";
import ListVideo from "./ListVideo";

const HomePage = () => {
  return (
    <MainLayout>
      <>
        <HeroBanner />
        <div className="home-container" style={{
          // backgroundImage: `url(${Images.BgContent}`,
        }}>
          <img src={Images.BgContent} alt='' className="bg-image" />
          <img src={Images.Vector} alt='' className="vector-image" />
          <Introduction />
          <HowToJoin />
          <Features />
          <ListVideo />
          {/* <Footer /> */}
        </div>
      </>
    </MainLayout>
  );
};

export default HomePage;
