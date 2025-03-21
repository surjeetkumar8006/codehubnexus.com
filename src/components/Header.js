import React from "react";
import { Link } from "react-router-dom";
import NavItems from "../components/NavItems"; 
import "../style/Header.css";


const Header = () => {
  return (
    <div className="header">
      <div className="logo__Container">
        <NavItems path="/" type="img" src="/images/logo.png" />
      </div>

      <nav className="navItems">
        <ul>
         
          <li><NavItems path="/courses" name="Courses" type="item" /></li>
          <li><NavItems path="/about" name="About" type="item" /></li>
          <li><NavItems path="/contact" name="Contact" type="item" /></li>
          <li><NavItems path="/login" name="Login" type="item" /></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
