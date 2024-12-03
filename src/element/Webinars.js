import React from "react";
import "./Webinars.css";

function Webinars() {
  const webinars = [
    {
      date: "2024-11-29",
      title: "Introduction to Organic Chemistry",
      speaker: "Dr. John Doe",
    },
    {
      date: "2024-12-05",
      title: "Advanced Chemical Reactions",
      speaker: "Prof. Jane Smith",
    },
    {
      date: "2024-12-12",
      title: "Chemical Bonding and Molecular Structure",
      speaker: "Dr. Emily White",
    },
  ];

  return (
    <div className="webinars-container">
      <header className="webinars-header">
        <h1>Upcoming Live Webinars</h1>
        <p>Join our live sessions to deepen your understanding of chemistry.</p>
      </header>
      <section className="webinars-list">
        {webinars.map((webinar, index) => (
          <div key={index} className="webinar-card">
            <h3>{webinar.title}</h3>
            <p>Date: {webinar.date}</p>
            <p>Speaker: {webinar.speaker}</p>
            <button className="register-button">Register Now</button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Webinars;
