import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Bagian Hero */}
      <section className="about-section">
        <div className="about-content">
          <h1 className="about-title">Tentang Kami</h1>
          <p className="about-text">
            Kami adalah tim yang berdedikasi untuk menciptakan pembelajaran berbasis web bagi siswa. Misi kami adalah memberikan dampak nyata dalam dunia pendidikan.
          </p>
        </div>
        <div className="about-image">
          <img src="https://i.pinimg.com/736x/52/df/7c/52df7c76097ef62c560c80a15e899cf7.jpg" alt="Tentang Kami" />
        </div>
      </section>

      {/* Bagian Kontak dan Komunitas */}
      <section className="abtus-section">
        <h2 className="abtus-title">Kontak & Komunitas Kami</h2>
        <div className="abtus-grid">
          <div className="abtus-item">
            <i className="fas fa-heart"></i>
            <h3>Instagram Kami</h3>
            <p>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">@chimilearn</a>
            </p>
          </div>
          <div className="abtus-item">
            <i className="fas fa-users"></i>
            <h3>Komunitas Kami</h3>
            <p>Bergabung dengan komunitas kami sekarang <a href="./community" target="_blank" rel="noreferrer">chimicommunity</a></p>
          </div>
          <div className="abtus-item">
            <i className="fas fa-lightbulb"></i>
            <h3>Alamat Kami</h3>
            <p>Depan gerbang Institut Teknologi Del, Sitoluama, Kec. Balige, Toba, Sumatera Utara 22381</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
