import Images from "assets/images";
import React, {useState} from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.scss";
import {Container} from "@mui/material";
import {Link as Scroll} from "react-scroll";
import {navbarItems} from "const";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const listNavbarItem = navbarItems.map((item, index) => {
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
        // smooth={true}
        // spy={true}
        // duration={100}
        // isDynamic={true}
        onClick={() => setToggleMenu(false)}
      >
        <p>{item.label}</p>
      </Scroll>
    );
  });
  return (
    <Container maxWidth="lg">
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <Link to={"/"}>
              <img src={Images.LOGO} alt="F17" />
            </Link>
          </div>
          <div className="gpt3__navbar-links_container">{listNavbarItem}</div>
        </div>

        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <CloseIcon
              size={27}
              sx={{color: "white"}}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <MenuIcon
              sx={{color: "white"}}
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                {listNavbarItem}
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
