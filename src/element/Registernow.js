import React from "react";
import { useLocation } from "react-router-dom";
import "./Registernow.css";

function Registernow() {
  const location = useLocation();
  const { state } = location;

  return (
    <div className="register-page">
      <h1>Register for Webinar</h1>
      <h2>{state?.title}</h2>
      <p>Date: {state?.date}</p>
      <p>Speaker: {state?.speaker}</p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Registernow;
