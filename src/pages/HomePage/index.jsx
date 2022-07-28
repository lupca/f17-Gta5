import MainLayout from "layout/MainLayout";
import React from "react";
import Features from "./Features";
import HeroBanner from "./HeroBanner";

const HomePage = () => {
  return (
    <MainLayout>
      <>
        <HeroBanner />
        <Features />
      </>
    </MainLayout>
  );
};

export default HomePage;
