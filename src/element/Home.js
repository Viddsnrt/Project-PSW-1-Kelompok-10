import React, { useEffect, useRef } from 'react';
import './Home.css';
import gambar1 from '../source/kimia1.jpg';
import gambar2 from '../source/kimia2.jpg';
import gambar3 from '../source/kimia3.jpg';
import gambar4 from '../source/kimia4.jpg';
import gambar5 from '../source/kimia5.jpg';
import gambar6 from '../source/kimia6.jpg';

function Home() {
  const sliderRef = useRef(null);
  const slideIndex = useRef(0);

  useEffect(() => {
    const slides = sliderRef.current.querySelectorAll('.slide');
    const totalSlides = slides.length;

    const interval = setInterval(() => {
      slides[slideIndex.current].classList.remove('active');
      slideIndex.current = (slideIndex.current + 1) % totalSlides;
      slides[slideIndex.current].classList.add('active');
    }, 3000); // Ganti slide setiap 3 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="home-container">
        {/* Header */}
        <header className="header">
          <h1 className="home-title">Belajar Kimia Lebih Mudah</h1>
          <p className="home-description">Materi lengkap, latihan soal, dan video interaktif untuk kelas 12.</p>
        </header>

        {/* Slider */}
        <div className="slider-container">
          <div className="slider" ref={sliderRef}>
            <img src={gambar1} alt="Materi Kimia 1" className="slide active" />
            <img src={gambar2} alt="Materi Kimia 2" className="slide" />
            <img src={gambar3} alt="Materi Kimia 3" className="slide" />
            <img src={gambar4} alt="Materi Kimia 4" className="slide" />
            <img src={gambar5} alt="Materi Kimia 5" className="slide" />
            <img src={gambar6} alt="Materi Kimia 6" className="slide" />
          </div>
        </div>

        {/* Features */}
        <div id="features" className="features">
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

      {/* Footer */}
      <footer id="contact" className="footer">
        <p>© 2024 Kimia12. Kelompok 10 Project.</p>
      </footer>
    </div>
  );
}

export default Home;
