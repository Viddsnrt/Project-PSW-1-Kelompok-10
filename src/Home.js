import React from 'react';
import './Materi.css';

function App() {
  return (
    <div>
      <nav className="menu">
        <h3>Kimia</h3>
        <ul>
          <li>
            <a href="#">Materi</a>
            <ul>
              <li><a href="#">Sifat Koligatif</a></li>
              <li><a href="#">Benzena</a></li>
              <li><a href="#">Unsur Kimia</a></li>
              <li><a href="#">Senyawa Karbon</a></li>
              <li><a href="#">Reaksi Redoks</a></li>
            </ul>
          </li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Our Services</a></li>
          <li><a href="#">About Us</a></li>
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
