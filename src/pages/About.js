import React from "react";
import "../style/About.css"; // Custom CSS Import

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="title">About Codehub Nexus</h2>
        <p className="subtitle">Empowering learners with the best coding education and real-world experience.</p>

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
      
      <style jsx>{`
        .about-section {
          padding: 60px 20px;
          background: #f9f9f9;
          text-align: center;
        }

        .container {
          max-width: 1200px;
          margin: auto;
        }

        .title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 10px;
        }

        .subtitle {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 40px;
        }

        .about-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 40px;
        }

        .about-content {
          flex: 1;
          max-width: 600px;
          text-align: left;
        }

        .about-content h3 {
          font-size: 1.8rem;
          color: #222;
          margin-bottom: 10px;
        }

        .about-content p {
          font-size: 1.1rem;
          color: #444;
          line-height: 1.6;
        }

        .about-image img {
          max-width: 100%;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .mission-vision {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          margin-top: 50px;
        }

        .box {
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          text-align: center;
        }

        .box h3 {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 10px;
        }

        .box p {
          font-size: 1rem;
          color: #555;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .about-wrapper {
            flex-direction: column;
            text-align: center;
          }

          .about-content {
            max-width: 100%;
            text-align: center;
          }

          .mission-vision {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default About;