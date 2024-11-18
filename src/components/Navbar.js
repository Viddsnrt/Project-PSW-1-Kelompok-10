import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from 'https://i.pinimg.com/736x/2b/9b/61/2b9b619d413dfc275c98cabb3c47001f.jpg'; 

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
      <img src={logo} alt="Logo" className="navbar-logo" /> {/* Logo added */}
      <h2 className="navbar-brand">Kimia Kelas 12</h2>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'}
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/info-layanan">Info Layanan</Link></li>
        <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <span aria-haspopup="true" aria-expanded={isDropdownOpen}>Program Pembelajaran</span>
          {isDropdownOpen && (
            <ul className="dropdown-content">
              <li><Link to="/program-pembelajaran/sifat-koligatif">Sifat Koligatif Larutan</Link></li>
              <li><Link to="/program-pembelajaran/reaksi-redoks">Reaksi Redoks dan Elektrokimia</Link></li>
              <li><Link to="/program-pembelajaran/kimia-unsur">Kimia Unsur</Link></li>
              <li><Link to="/program-pembelajaran/senyawa-karbon">Senyawa Karbon</Link></li>
              <li><Link to="/program-pembelajaran/benzena">Benzena dan Turunannya</Link></li>
              <li><Link to="/Quiz">Quiz</Link></li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/login">
            <button className="navbar-button">Login</button>
          </Link>
        </li>
        <li>
          <Link to="/register">
            <button className="navbar-button">Register</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;