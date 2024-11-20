import React from 'react';
import './Home.css';

function Home() {
 
  return (
    <div>
      <div className="menu">
        <h3>Kimia</h3>
      </div>

      {/* Start main */}
      <main className="main">
        <div>
          <h1>Chemical Reactions <br /> Every Day</h1>
          <p>Explore the world of chemistry <br /> and enhance your understanding tomorrow with chimiLearn</p>
        </div>
        <figure>
          <img src="https://png.pngtree.com/background/20230616/original/pngtree-atomic-level-molecular-structure-in-3d-rendering-ideal-for-medical-backgrounds-picture-image_3666984.jpg" alt="stoichiometry reactions" />
        </figure>
      </main>
      {/* End main */}
    </div>
  );
}

export default Home;