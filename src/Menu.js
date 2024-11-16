import React from 'react';
import './Menu.css'; // Make sure to create this CSS file for styling

function Menu() {
  return (
    <div className="menu-container">
      <h2 className="menu-title">Menu</h2>
      <ul className="menu-list">
        <li><a href="/" className="menu-item">Home</a></li>
        <li><a href="/info-layanan" className="menu-item">Info Layanan</a></li>
        <li><a href="/program-pembelajaran/sifat-koligatif" className="menu-item">Program Pembelajaran - Sifat Koligatif</a></li>
        <li><a href="/program-pembelajaran/reaksi-redoks" className="menu-item">Program Pembelajaran - Reaksi Redoks</a></li>
        <li><a href="/program-pembelajaran/kimia-unsur" className="menu-item">Program Pembelajaran - Kimia Unsur</a></li>
        <li><a href="/program-pembelajaran/senyawa-karbon" className="menu-item">Program Pembelajaran - Senyawa Karbon</a></li>
        <li><a href="/program-pembelajaran/benzena" className="menu-item">Program Pembelajaran - Benzena</a></li>
        <li><a href="/kirim-pesan" className="menu-item">Kirim Pesan</a></li>
      </ul>
    </div>
  );
}

export default Menu;
