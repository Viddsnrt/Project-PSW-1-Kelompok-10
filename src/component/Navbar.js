import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setDropdownOpen(false); 
    setMenuOpen(false); 
  };


  return (
    <div>
      <nav className="menu">
        <h3>Kimia</h3>
        <ul>
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/Quiz" onClick={handleLinkClick}>Quiz</Link></li>
        <li><Link to="/ourservices" onClick={handleLinkClick}>Our Services</Link></li>
        <li><Link to="/kirim-pesan" onClick={handleLinkClick}>Kirim Pesan</Link></li>
        <li><Link to="/Register" onClick={handleLinkClick}>Register</Link></li>
        <li><Link to="/Login" onClick={handleLinkClick}>Login</Link></li>
        <li><Link to="/AboutUS" onClick={handleLinkClick}>About Us </Link> </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;