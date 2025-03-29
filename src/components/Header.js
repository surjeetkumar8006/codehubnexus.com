import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavItems from "../components/NavItems";
import "../style/Header.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo__Container">
        <NavItems path="/" type="img" src="/images/logo.png" />
      </div>
      
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={`navItems ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><NavItems path="/courses" name="Courses" type="item" /></li>
          <li><NavItems path="/about" name="About" type="item" /></li>
          <li><NavItems path="/contact" name="Contact" type="item" /></li>
          <li><NavItems path="/login" name="Login" type="item" /></li>
        </ul>
      </nav>

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          background-color: #fff;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .logo__Container {
          flex-shrink: 0;
        }

        .menu-toggle {
          display: none;
          font-size: 24px;
          background: none;
          border: none;
          cursor: pointer;
          position: absolute;
          right: 20px;
          top: 15px;
        }

        .navItems ul {
          display: flex;
          list-style: none;
          gap: 20px;
          margin: 0;
          padding: 0;
        }

        .navItems ul li {
          padding: 10px 15px;
        }

        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
          }

          .navItems {
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            background: #fff;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            transform: translateY(-100%);
            transition: transform 0.3s ease-in-out;
            display: flex;
            flex-direction: column;
            align-items: center;
            opacity: 0;
            visibility: hidden;
          }

          .navItems.open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .navItems ul {
            flex-direction: column;
            align-items: center;
            width: 100%;
            padding: 0;
          }

          .navItems ul li {
            width: 100%;
            text-align: center;
            padding: 15px 0;
            border-bottom: 1px solid #ddd;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;