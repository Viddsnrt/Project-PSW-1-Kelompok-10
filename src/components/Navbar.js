import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const handleLinkClick = () => {
    setDropdownOpen(false); 
    setMenuOpen(false); 
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  // Scroll event handler to toggle sticky class
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setSticky(true);  // Add sticky effect when scrolled
    } else {
      setSticky(false);  // Remove sticky effect when on top
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''} ${isSticky ? 'sticky' : ''}`}>
      <h2 className="navbar-brand">chimiLearn</h2>
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li 
          className="dropdown" 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <span>Program Pembelajaran</span>
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
        <li><Link to="/Login" onClick={handleLinkClick}>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
