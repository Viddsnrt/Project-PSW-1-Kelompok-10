import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    setDropdownOpen(false); // Tutup dropdown saat link diklik
  };

  return (
    <div>
      <nav className="menu">
        <h3>Kimia</h3>
        <ul>
          <li>
            <button onClick={toggleDropdown} className="dropdown-toggle">
              Materi
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
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
            )}
          </li>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
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
            <Link to="/kirim-pesan" onClick={handleLinkClick}>
              Kirim Pesan
            </Link>
          </li>
          <li>
            <Link to="/Register" onClick={handleLinkClick}>
              Register
            </Link>
          </li>
          <li>
            <Link to="/Login" onClick={handleLinkClick}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/AboutUS" onClick={handleLinkClick}>
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
