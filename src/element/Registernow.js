import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Registernow.css";

function Registernow() {
  const location = useLocation();
  const { state } = location;

  // Tetapkan nilai default jika data tidak tersedia
  const title = state?.title || "Exclusive Webinar";
  const date = state?.date || "23 December 2024";
  const speaker = state?.speaker || "Prof. John";

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="register-page">
      <h1>Register for Our Exclusive Webinar</h1>
      <h2>{title}</h2>
      <p>Date: <strong>{date}</strong></p>
      <p>Speaker: <strong>{speaker}</strong></p>

      {!formSubmitted ? (
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email address" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="Enter your phone number" required />
          </div>
          <div className="form-group">
            <label htmlFor="organization">Organization/Institution</label>
            <input
              type="text"
              id="organization"
              placeholder="Enter your organization/institution (optional)"
            />
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" required /> I agree to the terms and conditions.
            </label>
          </div>
          <button type="submit" className="submit-button">Register Now</button>
        </form>
      ) : (
        <div className="success-message">
          <h3>Thank You for Registering!</h3>
          <p>Check your email for the webinar details.</p>
        </div>
      )}
    </div>
  );
}

export default Registernow;
