import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk login status
  const [userName, setUserName] = useState(''); // State untuk nama pengguna
  const navigate = useNavigate(); // Untuk mengarahkan pengguna setelah logout

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

  // Mengatur status login dan nama pengguna dari localStorage
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    const storedUserName = localStorage.getItem('userName');
    
    if (loggedIn && storedUserName) {
      setIsLoggedIn(true);
      setUserName(storedUserName);
    }

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fungsi untuk logout
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
    setUserName('');
    navigate('/Login'); // Arahkan pengguna ke halaman Login setelah logout
  };

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

        {/* Kondisional untuk menampilkan Login/Logout */}
        {!isLoggedIn ? (
          <li><Link to="/Login" onClick={handleLinkClick}>Login</Link></li>
        ) : (
          <>
            <li className="user-name">{userName}</li>
            <li className="logout-button" onClick={handleLogout}>Logout</li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
