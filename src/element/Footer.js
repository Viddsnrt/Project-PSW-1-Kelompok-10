import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h4>Tentang ChimiLearn</h4>
          <p>Website pembelajaran kimia yang membantu kamu memahami kimia dengan lebih baik!</p>
        </div>
        <div className="footer-links">
          <h4>Menu Cepat</h4>
          <ul>
            <li>
              <a href="/aboutus">Tentang Kami</a>
            </li>
            <li>
              <a href="/OurServices">Layanan Kami</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Ikuti Kami</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 ChimiLearn</p>
      </div>
    </footer>
  );
}

export default Footer;
