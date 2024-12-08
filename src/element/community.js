import React from "react";
import "./community.css";
import { Link } from "react-router-dom";

function Community() {
  return (
    <div className="community-container">
      <header className="community-header">
        <h1>Selamat Datang di Komunitas ChimiLearn</h1>
        <p>
          Terhubung dengan sesama pembelajar, ajukan pertanyaan, dan jelajahi kimia bersama!
        </p>
      </header>

      <section className="community-features">
        <div className="feature-card">
          <h3>Forum Diskusi</h3>
          <p>
            Ikuti diskusi tentang topik kimia dengan anggota lainnya.
          </p>
          <Link to="/forum">
            <button className="feature-button">Kunjungi Forum</button>
          </Link>
        </div>
        <div className="feature-card">
          <h3>Webinar Langsung</h3>
          <p>
            Ikuti sesi langsung yang dipandu oleh para ahli dan tingkatkan pengetahuan Anda.
          </p>
          <Link to="/Registernow">
            <button className="feature-button">Lihat Jadwal</button>
          </Link>
        </div>
        <div className="feature-card">
          <h3>Perpustakaan Sumber Daya</h3>
          <p>
            Akses koleksi artikel, panduan, dan tutorial eksperimen.
          </p>
          <Link to="/Resourcelibrary">
            <button className="feature-button">Jelajahi Sumber Daya</button>
          </Link>
        </div>
      </section>

      <section className="join-section">
        <h2>Siap untuk Memulai?</h2>
        <p>Bergabunglah dengan Komunitas ChimiLearn hari ini.</p>
        <Link to="/Joincommunity">
          <button className="cta-button">Gabung Sekarang</button>
        </Link>
      </section>
    </div>
  );
}

export default Community;
