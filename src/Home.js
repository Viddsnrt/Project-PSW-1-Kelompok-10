import React from 'react';
import './Home.css'; // Make sure to create this CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <div className="header">
        <h1 className="home-title">Selamat Datang di Website Materi Kimia Kelas 12</h1>
        <p className="home-description">Pelajari berbagai konsep Kimia dengan mudah di sini.</p>
      </div>
      
      <div className="features">
        <div className="feature">
          <h3>Materi Lengkap</h3>
          <p>Belajar berbagai topik Kimia yang mencakup konsep dasar hingga lanjutan.</p>
        </div>
        <div className="feature">
          <h3>Soal Latihan</h3>
          <p>Latihan soal untuk menguji pemahamanmu tentang materi yang telah dipelajari.</p>
        </div>
        <div className="feature">
          <h3>Video Pembelajaran</h3>
          <p>Tonton video pembelajaran untuk penjelasan yang lebih interaktif.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
