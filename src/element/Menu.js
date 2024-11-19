import React from 'react';
import './Menu.css'; // Ensure this CSS file exists and is styled appropriately

function Menu() {
  return (
    <div className="menu-container">
      <h2 className="menu-title">Menu Pembelajaran Kimia</h2>
      <ul className="menu-list">
        <li><a href="/" className="menu-item">Beranda</a></li>
        <li><a href="/materi/materi-kimia" className="menu-item">Materi Kimia</a></li>
        <ul className="sub-menu">
          <li><a href="/materi/sifat-koligatif" className="menu-sub-item">Sifat Koligatif</a></li>
          <li><a href="/materi/reaksi-redoks" className="menu-sub-item">Reaksi Redoks</a></li>
          <li><a href="/materi/kimia-unsur" className="menu-sub-item">Kimia Unsur</a></li>
          <li><a href="/materi/senyawa-karbon" className="menu-sub-item">Senyawa Karbon</a></li>
          <li><a href="/materi/benzena" className="menu-sub-item">Benzena</a></li>
        </ul>
        <li><a href="/latihan-soal" className="menu-item">Latihan Soal</a></li>
        <li><a href="/video-pembelajaran" className="menu-item">Video Pembelajaran</a></li>
        <li><a href="/forum-diskusi" className="menu-item">Forum Diskusi</a></li>
        <li><a href="/kirim-pesan" className="menu-item">Kirim Pesan</a></li>
        <li><a href="/tentang" className="menu-item">Tentang Kami</a></li>
      </ul>
    </div>
  );
}

export default Menu;
