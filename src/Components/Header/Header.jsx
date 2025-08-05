import React, { useState } from "react";
import "./Header.css";
// import './index.css'
// import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (window.innerWidth <= 800) {
      return { right: menuOpened ? "0" : "-100%" };
    }
    return {}; // prevent undefined
  };

  return (
    <section className="H-wrapper">
      <div className="flexCenter paddings innerWidth H-container">
        <img src="./logo.png" alt="logo" width={100} />

        <OutsideClickHandler onOutsideClick={() => {setMenuOpened(false)}}>
          <div className="flexCenter H-menu" style={getMenuStyles(menuOpened)}>
            <a href="#residencies">Residencies</a>
            <a href="#values">Our Values</a>
            <a href="#contact">Contact Us</a>
            <a href="#get-started">Get Started</a>


            <button className="button">
              <a href="">Login</a>
            </button>
          </div>
        </OutsideClickHandler>

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
 