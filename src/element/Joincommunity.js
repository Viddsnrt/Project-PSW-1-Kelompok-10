import React, { useState } from "react";
import "./Joincommunity.css";

function JoinCommunity() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="join-community-container">
      <header className="join-header">
        <h1>Join the ChimiLearn Community</h1>
        <p>
          Become part of a passionate community of chemistry learners, access exclusive resources, and participate in exciting discussions!
        </p>
      </header>

      {!formSubmitted ? (
        <form className="join-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email address" required />
          </div>
          <div className="form-group">
            <label htmlFor="interests">Why are you interested in joining?</label>
            <textarea
              id="interests"
              placeholder="Tell us why you want to join the ChimiLearn Community"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" required /> I agree to the community guidelines and terms.
            </label>
          </div>
          <button type="submit" className="join-button">Join Now</button>
        </form>
      ) : (
        <div className="success-message">
          <h2>Thank You for Joining!</h2>
          <p>We are excited to have you as part of the ChimiLearn Community! Check your email for further details.</p>
        </div>
      )}
    </div>
  );
}

export default JoinCommunity;
