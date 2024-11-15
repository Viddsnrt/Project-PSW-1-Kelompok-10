import React from 'react';
import './Home.css'; // Make sure to create this CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <div className="header">
        <h1 className="home-title">Selamat Datang di Website Materi Kimia Kelas 12</h1>
        <p className="home-description">Pelajari berbagai konsep Kimia dengan mudah di sini.</p>
      </div>
      
      {/* Slider Container */}
      <div className="slider-container">
        <div className="slide-item">
          <img src="/kimia 1.jpg" alt="Materi Kimia 1" className="slider-image" />
          <div className="slider-caption">Materi Kimia Dasar</div>
        </div>
        <div className="slide-item">
          <img src="/kimia2.jpg" alt="Materi Kimia 2" className="slider-image" />
          <div className="slider-caption">Reaksi Kimia</div>
        </div>
        <div className="slide-item">
          <img src="/kimia3.jpg" alt="Materi Kimia 3" className="slider-image" />
          <div className="slider-caption">Kimia Organik</div>
        </div>
      </div>

      <div className="features">
        <div className="feature">
          <h3>Materi Lengkap</h3>
          <p>Belajar berbagai topik Kimia yang mencakup konsep dasar hingga lanjutan.</p>
          <button className="button">Pelajari Selengkapnya</button>
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