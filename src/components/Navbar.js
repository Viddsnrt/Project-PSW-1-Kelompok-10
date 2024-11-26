import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ triggerUpdate }) { 
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

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

  // Scroll event handler
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  // Sinkronisasi data login dari localStorage ke state
  const syncLoginState = () => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    const storedUserName = localStorage.getItem("userName");

    if (loggedIn === "true" && storedUserName) {
      setIsLoggedIn(true);
      setUserName(storedUserName);
    } else {
      setIsLoggedIn(false);
      setUserName("");
    }
  };

  // useEffect untuk inisialisasi dan sinkronisasi state
  useEffect(() => {
    syncLoginState(); // Sinkronisasi saat pertama kali render

    // Tambahkan listener untuk perubahan localStorage
    const handleStorageChange = () => {
      syncLoginState();
    };
    window.addEventListener("storage", handleStorageChange);

    // Tambahkan listener untuk scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup listeners
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fungsi untuk logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    setUserName("");
    navigate("/Login");
  };

  return (
    <nav
      className={`navbar ${isMenuOpen ? "open" : ""} ${
        isSticky ? "sticky" : ""
      }`}
    >
      <h2 className="navbar-brand">ChimiLearn</h2>
      <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li
          className="dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span>Program Pembelajaran</span>
          <ul className={`dropdown-content ${isDropdownOpen ? "show" : ""}`}>
            <li>
              <Link
                to="/program-pembelajaran/sifat-koligatif"
                onClick={handleLinkClick}
              >
                Sifat Koligatif Larutan
              </Link>
            </li>
            <li>
              
              <Link
                to="/program-pembelajaran/reaksi-redoks"
                onClick={handleLinkClick}
              >
                Reaksi Redoks dan Elektrokimia
              </Link>
            </li>
            <li>
              <Link
                to="/program-pembelajaran/kimia-unsur"
                onClick={handleLinkClick}
              >
                Kimia Unsur
              </Link>
            </li>
            <li>
              <Link
                to="/program-pembelajaran/senyawa-karbon"
                onClick={handleLinkClick}
              >
                Senyawa Karbon
              </Link>
            </li>
            <li>
              <Link
                to="/program-pembelajaran/benzena"
                onClick={handleLinkClick}
              >
                Benzena dan Turunannya
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/Quiz" onClick={handleLinkClick}>
            Quiz
          </Link>
        </li>
        <li>
          <Link to="/ourservices" onClick={handleLinkClick}>
            Our Services
          </Link>
        </li>
        <li>

          <Link to ="/SimulasiLaboratorium" onClick={handleLinkClick}>
          Simulasi Laboratorium
          </Link>
          </li> 
          <li> 
            
          <Link to="/kirim-pesan" onClick={handleLinkClick}>
            Kirim Pesan
          </Link>
        </li>

        {!isLoggedIn ? (
          <li>
            <Link to="/Login" onClick={handleLinkClick}>
              Login
            </Link>
          </li>
        ) : (
          <>
            <li className="user-name">{userName}</li>
            <li className="logout-button" onClick={handleLogout}>
              Logout
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
