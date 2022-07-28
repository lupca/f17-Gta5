import Images from "assets/images";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.scss";
import { IconButton } from "@mui/material";
import { Link as Scroll } from "react-scroll";
import { navbarItems } from "const";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={Images.LOGO} alt="F17" />
        </div>
        <div className="gpt3__navbar-links_container">
          {navbarItems.map((item, index) => {
            if (item.isLink)
              return (
                <Link to={item.path} key={index}>
                  <p>{item.label}</p>
                </Link>
              );
            return (
              <Scroll
                activeClass="active"
                key={index}
                to={item.path}
                smooth={true}
                spy={true}
                duration={100}
                isDynamic={true}
              >
                <p>{item.label}</p>
              </Scroll>
            );
          })}
        </div>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <IconButton onClick={() => setToggleMenu(false)}>
            <CloseIcon size={27} />
          </IconButton>
        ) : (
          <MenuIcon
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">What is GPT3?</a>
              </p>
              <p>
                <a href="#possibility">Open AI</a>
              </p>
              <p>
                <a href="#features">Case Studies</a>
              </p>
              <p>
                <a href="#blog">Library</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
