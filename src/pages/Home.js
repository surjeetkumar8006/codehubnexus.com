<<<<<<< HEAD
import React from "react";
import "../style/Home.css";
import CoursesSection from "./CoursesSection"; // Import the Courses Section component

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
=======
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

>>>>>>> recovered-files
      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Your Tech Future</h1>
          <p>Learn from industry experts & build real-world projects with us.</p>
<<<<<<< HEAD
          <button className="btn-primary">Get Started</button>
        </div>
      </section>

=======
          <button className="btn-primary" onClick={handlePopup}>Get Started</button>
        </div>
      </section>
      
>>>>>>> recovered-files
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
<<<<<<< HEAD
      <section className="courses">
        <CoursesSection />
      </section>
      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonial-card">
          <p>"Codehub Nexus transformed my career! The projects helped me get a job in an MNC."</p>
          <h4>- Aman Gupta</h4>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Start Your IT Journey Today!</h2>
        <button className="btn-primary">Apply Now</button>
=======
      
      <section className="courses">
        <CoursesSection />
      </section>
      
      <section className="cta">
        <h2>Start Your IT Journey Today!</h2>
        <button className="btn-primary" onClick={handlePopup}>Apply Now</button>
>>>>>>> recovered-files
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> recovered-files
