import React from "react";
import "./Benzena.css";

function Benzena() {
  return (
    <div className="benzena-container">
      <h1 className="main-title">Bab 5: Benzena dan Turunannya</h1>
      <p className="intro-text">
        Benzena adalah senyawa aromatik dengan rumus molekul C<sub>6</sub>H<sub>6</sub>. Senyawa ini memiliki struktur cincin enam karbon dengan delokalisasi elektron pi, yang memberikan stabilitas unik. Benzena merupakan bahan dasar penting untuk banyak senyawa kimia lainnya.
      </p>

      {/* Struktur Benzena */}
      <section>
        <h2 className="section-title">Struktur Benzena</h2>
        <p>
          Struktur benzena pertama kali dijelaskan oleh Kekulé sebagai cincin dengan ikatan tunggal dan ganda yang berselang-seling. Namun, model ini telah dimodifikasi menjadi model delokalisasi elektron pi, di mana semua ikatan dalam cincin memiliki panjang yang sama.
        </p>
        <div className="image-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Benzene-2D-full.svg"
            alt="Struktur Benzena"
            className="benzene-image"
          />
          <p className="image-caption">Gambar 1: Struktur cincin benzena dengan delokalisasi elektron pi.</p>
        </div>
      </section>

      {/* Sifat Kimia */}
      <section>
        <h2 className="section-title">Sifat Kimia Benzena</h2>
        <ul>
          <li><b>Aromatisitas:</b> Benzena stabil karena delokalisasi elektron pi, yang memberikan sifat aromatik.</li>
          <li><b>Nonpolar:</b> Benzena adalah senyawa nonpolar karena distribusi elektron yang simetris.</li>
          <li><b>Reaksi Substitusi:</b> Benzena cenderung mengalami reaksi substitusi elektrofilik, bukan adisi, karena ingin mempertahankan aromatisitasnya.</li>
        </ul>
      </section>

      {/* Reaksi Benzena */}
      <section>
        <h2 className="section-title">Reaksi Benzena</h2>
        <p>
          Reaksi benzena mencakup berbagai jenis reaksi substitusi elektrofilik. Beberapa contohnya adalah:
        </p>
        <ul>
          <li>
            <b>Nitrasi:</b> Reaksi benzena dengan campuran asam nitrat dan asam sulfat menghasilkan nitrobenzena.
          </li>
          <li>
            <b>Halogenasi:</b> Reaksi dengan halogen seperti klorin atau bromin menghasilkan halobenzena.
          </li>
          <li>
            <b>Alkilasi Friedel-Crafts:</b> Penambahan gugus alkil menggunakan katalis AlCl<sub>3</sub>.
          </li>
        </ul>
      </section>

      {/* Turunan Benzena */}
      <section>
        <h2 className="section-title">Turunan Benzena</h2>
        <p>Beberapa turunan penting dari benzena mencakup:</p>
        <ul>
          <li>
            <b>Toluena:</b> Benzena dengan satu gugus metil (C<sub>6</sub>H<sub>5</sub>CH<sub>3</sub>), digunakan sebagai pelarut.
          </li>
          <li>
            <b>Fenol:</b> Benzena dengan gugus hidroksil (-OH), digunakan dalam pembuatan plastik dan obat.
          </li>
          <li>
            <b>Anilin:</b> Benzena dengan gugus amina (-NH<sub>2</sub>), digunakan dalam industri pewarna.
          </li>
        </ul>
      </section>

      {/* Aplikasi Benzena */}
      <section>
        <h2 className="section-title">Aplikasi Benzena</h2>
        <p>
          Benzena dan turunannya memiliki banyak aplikasi penting:
        </p>
        <ul>
          <li><b>Industri Plastik:</b> Digunakan untuk pembuatan polistirena.</li>
          <li><b>Bahan Kimia:</b> Menjadi prekursor untuk senyawa seperti fenol dan anilin.</li>
          <li><b>Farmasi:</b> Bahan dasar dalam pembuatan obat-obatan.</li>
        </ul>
      </section>
    </div>
  );
}

export default Benzena;
