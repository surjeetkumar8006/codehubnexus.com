import React, { useState } from "react";
import "../style/Home.css";
import CoursesSection from "./CoursesSection";

const Popup = ({ message, onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <h2>{message}</h2>
        <button className="btn-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Auto-close after 3s
  };

  return (
    <div>
      {showPopup && <Popup message="Welcome to Codehub Nexus!" onClose={() => setShowPopup(false)} />}

      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Your Tech Future</h1>
          <p>Learn from industry experts & build real-world projects with us.</p>
          <button className="btn-primary" onClick={handlePopup}>Get Started</button>
        </div>
      </section>
      
      <section className="why-us">
        <h2>Why Choose Codehub Nexus?</h2>
        <div className="features">
          <div className="feature">
            <img src="/images/surjeet.jpeg" alt="Expert Mentors" />
            <h3>Expert Mentors</h3>
            <p>Learn from top professionals with years of experience.</p>
          </div>
          <div className="feature">
            <img src="/images/l3.jfif" alt="Hands-on Learning" />
            <h3>Hands-on Learning</h3>
            <p>Work on real-world projects to enhance your skills.</p>
          </div>
          <div className="feature">
            <img src="/images/learnign.jfif" alt="Career Support" />
            <h3>Placement Assistance</h3>
            <p>Get guidance to land your dream job in IT.</p>
          </div>
        </div>
      </section>
      
      <section className="courses">
        <CoursesSection />
      </section>
      
      <section className="cta">
        <h2>Start Your IT Journey Today!</h2>
        <button className="btn-primary" onClick={handlePopup}>Apply Now</button>
      </section>
    </div>
  );
};

export default Home;