import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function MainLayout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.element,
};

export default MainLayout;
