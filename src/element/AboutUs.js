
import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="about-section">
        <div className="about-content">
          <h1 className="about-title">About Us</h1>
          <p className="about-text">
            We are a passionate team dedicated to creating web learning for students. Our mission is to make a difference in the education.
          </p>
        </div>
        <div className="about-image">
          <img src="https://i.pinimg.com/736x/52/df/7c/52df7c76097ef62c560c80a15e899cf7.jpg" alt="About Us" />
        </div>
      </section>

      {/* Features Section */}
      <section className="abtus-section">
        <h2 className="abtus-title">Our Contacts & Community</h2>
        <div className="abtus-grid">
          <div className="abtus-item">
            <i className="fas fa-heart"></i>
            <h3>Our Instagram</h3>
            <p>
                 <a href="https://instagram.com" target="_blank" rel="noreferrer">@chimilearn</a>
            </p>

          </div>
          <div className="abtus-item">
            <i className="fas fa-users"></i>
            <h3>Our Community</h3>
            <p>Join to our community now <a href="./community" target="_blank" rel="noreferrer">chimicommunity</a> </p>
          </div>
          <div className="abtus-item">
            <i className="fas fa-lightbulb"></i>
            <h3>Our Address</h3>
            <p>Depan gerbang Institut Teknologi Del, Sitoluama, Kec. Balige, Toba, Sumatera Utara 22381</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
