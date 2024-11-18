import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <h2 className="navbar-brand">Kimia Kelas 12</h2>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'}
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/info-layanan">Info Layanan</Link></li>
        <li className="dropdown">
          <span onClick={toggleDropdown} className="dropdown-toggle">Program Pembelajaran</span>
          {isDropdownOpen && (
            <ul className="dropdown-content">
              <li><Link to="/program-pembelajaran/sifat-koligatif">Sifat Koligatif Larutan</Link></li>
              <li><Link to="/program-pembelajaran/reaksi-redoks">Reaksi Redoks dan Elektrokimia</Link></li>
              <li><Link to="/program-pembelajaran/kimia-unsur">Kimia Unsur</Link></li>
              <li><Link to="/program-pembelajaran/senyawa-karbon">Senyawa Karbon</Link></li>
              <li><Link to="/program-pembelajaran/benzena">Benzena dan Turunannya</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/kirim-pesan">Kirim Pesan</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;