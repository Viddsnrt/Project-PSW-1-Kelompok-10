import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 


function Home() {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <h1 className="home-title">Selamat Datang di Website Materi Kimia Kelas 12</h1>
        <p className="home-description">Pelajari berbagai konsep Kimia dengan mudah di sini.</p>
        <Link to="/menu">
          <button className="explore-button">Explore</button>
        </Link>
      </header>

     
      <div className="features">
      <div className="feature">
          <h3>Materi Pembelajaran</h3>
          <p>Mulai belajar dengan materi pembelajaran yang lengkap dan tepat.</p>
          <button className="button">Coba Sekarang</button>
        </div>
        <div className="feature">
          <h3>Soal Latihan</h3>
          <p>Latihan soal untuk menguji pemahamanmu tentang materi yang telah dipelajari.</p>
          <button className="button">Coba Sekarang</button>
        </div>
        <div className="feature">
          <h3>Video Pembelajaran</h3>
          <p>Tonton video pembelajaran untuk penjelasan yang lebih interaktif.</p>
          <button className="button">Tonton Video</button>
        </div>
      </div>
    </div>
  );
}

export default Home;