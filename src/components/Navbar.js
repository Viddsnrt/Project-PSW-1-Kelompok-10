import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };


  const handleLinkClick = () => {
    setDropdownOpen(false); 
    setMenuOpen(false); 
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <h2 className="navbar-brand">chimiLearn</h2>
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li className="dropdown">
          <span onClick={toggleDropdown}>Program Pembelajaran</span>
          <ul className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
            <li><Link to="/program-pembelajaran/sifat-koligatif" onClick={handleLinkClick}>Sifat Koligatif Larutan</Link></li>
            <li><Link to="/program-pembelajaran/reaksi-redoks" onClick={handleLinkClick}>Reaksi Redoks dan Elektrokimia</Link></li>
            <li><Link to="/program-pembelajaran/kimia-unsur" onClick={handleLinkClick}>Kimia Unsur</Link></li>
            <li><Link to="/program-pembelajaran/senyawa-karbon" onClick={handleLinkClick}>Senyawa Karbon</Link></li>
            <li><Link to="/program-pembelajaran/benzena" onClick={handleLinkClick}>Benzena dan Turunannya</Link></li>
          </ul>
        </li>
        <li><Link to="/Quiz" onClick={handleLinkClick}>Quiz</Link></li>
        <li><Link to="/ourservices" onClick={handleLinkClick}>Our Services</Link></li>
        <li><Link to="/kirim-pesan" onClick={handleLinkClick}>Kirim Pesan</Link></li>
        <li><Link to="/Register" onClick={handleLinkClick}>Register</Link></li>
        <li><Link to="/Login" onClick={handleLinkClick}>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;