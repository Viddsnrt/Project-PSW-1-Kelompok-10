import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h4>Belajar Kimia Bersama Kami</h4>
        <p>© 2023 ChimiLearn. Semua hak dilindungi.</p>
        <div className="footer-links">
          <a href="#about">Tentang Kami</a>
          <a href="#contact">Kontak</a>
          <a href="#privacy">Kebijakan Privasi</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;