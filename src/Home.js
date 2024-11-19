import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

// Import your images here
import gambar1 from '../src/kimia1.jpg'; // Update the path as necessary
import gambar2 from '../src/kimia2.jpg'; // Update the path as necessary
import gambar3 from '../src/kimia3.jpg'; // Update the path as necessary
import gambar4 from '../src/kimia4.jpg'; // Update the path as necessary
import gambar5 from '../src/kimia5.jpg'; // Update the path as necessary
import gambar6 from '../src/kimia6.jpg'; // Update the path as necessary

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

      {/* Slider */}
      <div className="slider-container">
        <div className="slider">
          <img src={gambar1} alt="Materi Kimia 1" className="slide" />
          <img src={gambar2} alt="Materi Kimia 2" className="slide" />
          <img src={gambar3} alt="Materi Kimia 3" className="slide" />
          <img src={gambar4} alt="Materi Kimia 4" className="slide" />
          <img src={gambar5} alt="Materi Kimia 5" className="slide" />
          <img src={gambar6} alt="Materi Kimia 6" className="slide" />
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
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