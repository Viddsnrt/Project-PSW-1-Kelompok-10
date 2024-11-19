import React, { useState } from 'react';
import './Materi.css';
import { Link } from 'react-router-dom';

function App() {

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
          <li>
            <a href="#">Materi</a>
            <ul>
            <li><Link to="/program-pembelajaran/sifat-koligatif" onClick={handleLinkClick}>Sifat Koligatif Larutan</Link></li>
            <li><Link to="/program-pembelajaran/reaksi-redoks" onClick={handleLinkClick}>Reaksi Redoks dan Elektrokimia</Link></li>
            <li><Link to="/program-pembelajaran/kimia-unsur" onClick={handleLinkClick}>Kimia Unsur</Link></li>
            <li><Link to="/program-pembelajaran/senyawa-karbon" onClick={handleLinkClick}>Senyawa Karbon</Link></li>
            <li><Link to="/program-pembelajaran/benzena" onClick={handleLinkClick}>Benzena dan Turunannya</Link></li>
            </ul>
          </li>
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/Quiz" onClick={handleLinkClick}>Quiz</Link></li>
        <li><Link to="/ourservices" onClick={handleLinkClick}>Our Services</Link></li>
        <li><Link to="/kirim-pesan" onClick={handleLinkClick}>Kirim Pesan</Link></li>
        <li><Link to="/Register" onClick={handleLinkClick}>Register</Link></li>
        <li><Link to="/Login" onClick={handleLinkClick}>Login</Link></li>
        <li><Link to="/AboutUS" onClick={handleLinkClick}>About Us </Link> </li>
        </ul>
      </nav>
      {/* End menu */}

      {/* Start main */}
      <main className="main">
        <div>
          <h1>Chemical Reactions <br /> Every Day</h1>
          <p>Explore the world of chemistry <br /> and enhance your understanding tomorrow</p>
          <button className="submit-btn">View Experiments</button>
          <button className="submit-btn">Book a Lab Session</button>
          <h3>Stoichiometry & Chemical Equations</h3>
          <h5>9:00 am - 11:00 am →</h5>
        </div>
        <figure>
          <img src="https://png.pngtree.com/background/20230616/original/pngtree-atomic-level-molecular-structure-in-3d-rendering-ideal-for-medical-backgrounds-picture-image_3666984.jpg" alt="stoichiometry reactions" />
        </figure>
      </main>
      {/* End main */}
    </div>
  );
}

export default App;
