import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import ScrollToTop from "./ScrollToTop";

export default function Navbar() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  // const [menu_class, setMenuClass] = useState("nav-right-section hidden");
  const [menu_class, setMenuClass] = useState("nav-right-section");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      // setMenuClass("nav-right-section visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      // setMenuClass("nav-right-section hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };
  
  return (
    <div>
      <div className="navbar">
        <div className="nav-left-section">
          <span href="/" className="navbar-text">
          Suryansh Singh Bisen
          </span>
        </div>
        {/* <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div> */}
        <div className="nav-right-section">
          <NavLink to="/" draggable="false" className='links' onClick={scrollToTop}>
            Home
          </NavLink>
          <NavLink to="/projects" draggable="false" className='links' onClick={scrollToTop}>
            Projects
          </NavLink>
          <NavLink to="/skills" draggable="false" className='links' onClick={scrollToTop}>
            Skills
          </NavLink>
          {/* <NavLink to="/about" draggable="false" onClick={updateMenu}>
            Designs
          </NavLink> */}
          <NavLink to="/contact" draggable="false" className='links' onClick={scrollToTop}>
            Contact
          </NavLink>
          <span className="nav-shadow"></span>
        </div>
      </div>
    </div>
  );
}
