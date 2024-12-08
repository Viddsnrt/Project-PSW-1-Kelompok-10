import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import ProgramPembelajaran from "../element/ProgramPembelajaran";
import ChimiLearn1 from './ChimiLearn1.png';
function Navbar() {
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

  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };

  const syncLoginState = () => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const storedUserName = localStorage.getItem("userName");

    setIsLoggedIn(loggedIn);
    setUserName(loggedIn ? storedUserName : "");
  };

  useEffect(() => {
    syncLoginState();
    window.addEventListener("storage", syncLoginState);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("storage", syncLoginState);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <div className="navbar-brand">
        <img src={ChimiLearn1} alt="ChimiLearn Logo" className="navbar-logo" />
        <h2>ChimiLearn</h2>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={handleLinkClick}>
            Beranda
          </Link>
        </li>
        <li
          className="dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/program-pembelajaran" className="dropdown-trigger">
            Program Pembelajaran
          </Link>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <ProgramPembelajaran onLinkClick={handleLinkClick} />
            </div>
          )}
        </li>
        <li>
          <Link to="/Quiz" onClick={handleLinkClick}>
            Kuis
          </Link>
        </li>
        <li>
          <Link to="/SimulasiLaboratorium" onClick={handleLinkClick}>
            Simulasi Laboratorium
          </Link>
        </li>
        <li>
          <Link to="/kirim-pesan" onClick={handleLinkClick}>
            Kirim Pesan
          </Link>
        </li>
        {!isLoggedIn ? (
          <>
            <li>
              <Link to="/Login" onClick={handleLinkClick}>
                Masuk
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="user-name">{userName}</li>
            <li className="logout-button" onClick={handleLogout}>
              Keluar
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
