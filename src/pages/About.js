import React from "react";
import "../style/About.css"; // Custom CSS Import

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2>About Codehub Nexus</h2>
        <p>Empowering learners with the best coding education and real-world experience.</p>

        <div className="about-wrapper">
          <div className="about-content">
            <h3>Who We Are</h3>
            <p>
              Codehub Nexus is a leading online coding institute that provides top-notch education in web 
              development, data analytics, and full-stack development. Our courses are designed to make 
              you job-ready with hands-on projects and expert mentorship.
            </p>
          </div>

          <div className="about-image">
            <img src="/images/contact-us.png" alt="About Codehub Nexus" />
          </div>
        </div>

        <div className="mission-vision">
          <div className="box">
            <h3>Our Mission</h3>
            <p>
              Our mission is to bridge the gap between theoretical knowledge and practical experience. 
              We believe in project-based learning to ensure real-world skills.
            </p>
          </div>
          <div className="box">
            <h3>Our Vision</h3>
            <p>
              To become the go-to platform for coding enthusiasts and aspiring developers 
              by offering high-quality, industry-focused courses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
