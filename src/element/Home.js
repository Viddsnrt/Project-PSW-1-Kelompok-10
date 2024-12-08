import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  // Periksa status login dari localStorage
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <div className="home-container">
      {/* Bagian Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Reaksi Kimia <br /> Setiap Hari
          </h1>
          <p className="hero-text">
            Jelajahi dunia kimia dan tingkatkan pemahamanmu bersama <span>ChimiLearn</span>
          </p>
          <Link to={ "/register"}>
            <button className="cta-button">Mulai Sekarang</button>
          </Link>
        </div>
        <figure className="hero-image">
          <img
            src="https://png.pngtree.com/background/20230616/original/pngtree-atomic-level-molecular-structure-in-3d-rendering-ideal-for-medical-backgrounds-picture-image_3666984.jpg"
            alt="reaksi stoikiometri"
          />
        </figure>
      </section>

      {/* Bagian Fitur */}
      <section className="features-section">
        <h2 className="features-title">Mengapa Belajar Kimia?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <i className="fas fa-atom"></i>
            <h3>Pelajaran Interaktif</h3>
            <p>Berinteraksi dengan materi pembelajaran yang dinamis dan praktis.</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-flask"></i>
            <h3>Eksperimen Nyata</h3>
            <p>Simulasikan reaksi kimia nyata dari mana saja.</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-microscope"></i>
            <h3>Panduan Ahli</h3>
            <p>Belajar dari yang terbaik di bidangnya dengan panduan yang mudah diikuti.</p>
          </div>
        </div>
      </section>

      {/* Bagian Call to Action */}
      <section className="cta-section">
        <h2>Bergabunglah dengan Komunitas ChimiLearn!</h2>
        <p>Mulailah perjalananmu ke dunia kimia yang menarik hari ini.</p>
        <Link to="/community">
          <button className="cta-button">Gabung Komunitas</button>
        </Link>
      </section>
    </div>
  );
}

export default Home;
