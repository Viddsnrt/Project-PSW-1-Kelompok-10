import React from "react";
import "./community.css";
import { Link } from "react-router-dom";

function Community() {
  return (
    <div className="community-container">
      <header className="community-header">
        <h1>Welcome to the ChimiLearn Community</h1>
        <p>
          Connect with fellow learners, ask questions, and explore chemistry
          together!
        </p>
      </header>

      <section className="community-features">
        <div className="feature-card">
          <h3>Discussion Forums</h3>
          <p>
            Engage in conversations about chemistry topics with other members.
          </p>
          <Link to="/forum">
            <button className="feature-button">Visit Forums</button>
          </Link>
        </div>
        <div className="feature-card">
          <h3>Live Webinars</h3>
          <p>Join live sessions hosted by experts and expand your knowledge.</p>
          <Link to="/webinars">
            <button className="feature-button">View Schedule</button>
          </Link>
        </div>
        <div className="feature-card">
          <h3>Resource Library</h3>
          <p>
            Access a collection of articles, guides, and experiment tutorials.
          </p>
          <Link to="/resources">
            <button className="feature-button">Browse Resources</button>
          </Link>
        </div>
      </section>

      <section className="join-section">
        <h2>Ready to Start?</h2>
        <p>Become a part of the ChimiLearn Community today.</p>
        <Link to="/register">
          <button className="cta-button">Join Now</button>
        </Link>
      </section>
    </div>
  );
}

export default Community;
