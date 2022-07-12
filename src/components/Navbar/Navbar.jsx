import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import "./Navbar.css";

// Navbar
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      {/* Brand Logo */}
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="Gericht" />
      </div>

      <ul className="app__navbar-links">
        {/* Home */}
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        {/* About */}
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        {/* Menu */}
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        {/* Awards */}
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        {/* Contact */}
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="app__navbar-login">
        {/* Login/Register */}
        {/* eslint-disable-next-line */}
        <a href="#" className="p__opensans">
          Log In/Register
        </a>
        {/* spacer */}
        <div />
        {/* Book Table */}
        {/* eslint-disable-next-line */}
        <a href="#" className="p__opensans">
          Book Table
        </a>
      </div>

      <div className="app__navbar-smallscreen">
        {/* Menu */}
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
          style={{ cursor: "pointer" }}
        />

        {/* Toggle Menu */}
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide__bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            {/* Small Screen Menu */}
            <ul className="app__navbar-smallscreen_links">
              {/* Home */}
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              {/* About */}
              <li className="p__opensans">
                <a href="#about">About</a>
              </li>
              {/* Menu */}
              <li className="p__opensans">
                <a href="#menu">Menu</a>
              </li>
              {/* Awards */}
              <li className="p__opensans">
                <a href="#awards">Awards</a>
              </li>
              {/* Contact */}
              <li className="p__opensans">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
