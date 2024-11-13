import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-brand">Kimia Kelas 12</h2>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/info-layanan">Info Layanan</Link></li>
        <li className="dropdown">
          <span>Program Pembelajaran</span>
          <ul className="dropdown-content">
            <li><Link to="/program-pembelajaran/sifat-koligatif">Sifat Koligatif Larutan</Link></li>
            <li><Link to="/program-pembelajaran/reaksi-redoks">Reaksi Redoks dan Elektrokimia</Link></li>
            <li><zLink to="/program-pembelajaran/kimia-unsur">Kimia Unsur</zLink></li>
            <li><Link to="/program-pembelajaran/senyawa-karbon">Senyawa Karbon</Link></li>
            <li><Link to="/program-pembelajaran/benzena">Benzena dan Turunannya</Link></li>
          </ul>
        </li>
        <li><Link to="/kirim-pesan">Kirim Pesan</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
