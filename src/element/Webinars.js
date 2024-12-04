import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Registernow.css";

function Registernow() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  const [submitted, setSubmitted] = useState(false); // State for submission status

  if (!state) {
    navigate("/");
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Show the success message

    // Automatically hide the notification after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      navigate("/"); // Redirect back to homepage or webinar list
    }, 3000);
  };

  return (
    <div className="Registernow">
      <h1>Register for Webinar</h1>
      <h2>{state.title}</h2>
      <p>Date: {state.date}</p>
      <p>Speaker: {state.speaker}</p>

      {/* Success Notification */}
      {submitted && (
        <div className="success-notification">
          <p>🎉 Registration successful! Thank you for joining us. 🎉</p>
        </div>
      )}

      {/* Registration Form */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Registernow;
