import React from "react";
import "../style/Contact.css"; // Custom CSS Import

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2>Contact Us</h2>
        <p>Have questions? Reach out to us, and we'll be happy to assist you.</p>
        
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Our Office</h3>
            <p>📍 123 Codehub Street, Tech City, India</p>
            <p>📧 support@codehubnexus.com</p>
            <p>📞 +91 9389364147</p>
          </div>

          <form className="contact-form">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />

            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Message</label>
            <textarea placeholder="Your message..." rows="4" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
