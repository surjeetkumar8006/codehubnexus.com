import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaHeart } from "react-icons/fa";
import "../style/Footer.css"; // Make sure to create this file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side - Logo & Description */}
        <div className="footer-left">
          <img src="/images/logo.png" alt="Codehub Nexus" className="footer-logo" />
          <p>
            Your Experiential Learning Partner, We aim to assist students & professionals to upskill their knowledge by learning & implementing.
          </p>
          <p className="made-with">
            Made with <FaHeart className="heart-icon" /> In India
          </p>
        </div>

        {/* Middle - Navigation Links */}
        <div className="footer-links">
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/library">Library</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <h3>Useful Link</h3>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/cookie-policy">Cookie Policy</Link>
          <Link to="/refunds">Refunds</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>

        {/* Right Side - Contact Details */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            <a href="https://goo.gl/maps/xyz" target="_blank" rel="noopener noreferrer">
              Block C-4, Service Lane, Above Dominos, Yamuna Vihar, NEW DELHI, DELHI 110053
            </a>
          </p>
          <p><FaPhone /> +91 87429 92996</p>
          <p><FaEnvelope /> admin@codehubnexus.com</p>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© 2024 By <a href="">codeHub Nexus</a>. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
