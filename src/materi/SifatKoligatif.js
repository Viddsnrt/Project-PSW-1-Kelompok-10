import React, { useState } from 'react';
import './SifatKoligatif.css';

function SifatKoligatif() {
  const [showOsmoticPressure, setShowOsmoticPressure] = useState(false);

  const toggleOsmoticPressure = () => {
    setShowOsmoticPressure(!showOsmoticPressure);
  };

  return (
    <div className="sifat-koligatif-container">
      <h2>Bab 1: Sifat Koligatif Larutan</h2>

      <section className="materi">
        <h3>Pengenalan Sifat Koligatif Larutan</h3>
        <p>
          Sifat koligatif larutan adalah sifat larutan yang hanya bergantung pada jumlah partikel zat terlarut, 
          bukan pada jenis zat terlarut itu sendiri. Sifat koligatif mencakup:
        </p>
        <ul>
          <li>Penurunan tekanan uap (ΔP)</li>
          <li>Peningkatan titik didih (ΔTb)</li>
          <li>Penurunan titik beku (ΔTf)</li>
          <li>Tekanan osmotik (π)</li>
        </ul>
        <img 
          src="https://example.com/colligative_properties_diagram.png" 
          alt="Diagram Sifat Koligatif" 
          className="colligative-img" 
        />
      </section>

      <section className="penurunan-tekanan-uap">
        <h3>1. Penurunan Tekanan Uap</h3>
        <p>
          Ketika zat terlarut ditambahkan ke pelarut, tekanan uap pelarut murni akan berkurang. Hal ini dikarenakan 
          partikel zat terlarut menghalangi molekul pelarut untuk menguap.
        </p>
        <p><strong>Rumus:</strong> ΔP = X₂ * P⁰</p>
        <p><em>Dimana:</em></p>
        <ul>
          <li>ΔP = Penurunan tekanan uap</li>
          <li>X₂ = Fraksi mol zat terlarut</li>
          <li>P⁰ = Tekanan uap pelarut murni</li>
        </ul>
      </section>

      <section className="peningkatan-titik-didih">
        <h3>2. Peningkatan Titik Didih</h3>
        <p>
          Titik didih larutan meningkat saat zat terlarut ditambahkan karena diperlukan lebih banyak energi untuk 
          menguapkan larutan dibandingkan pelarut murni.
        </p>
        <p><strong>Rumus:</strong> ΔTb = Kb * m</p>
        <p><em>Dimana:</em></p>
        <ul>
          <li>ΔTb = Kenaikan titik didih</li>
          <li>Kb = Konstanta pendidihan molal</li>
          <li>m = Molalitas larutan</li>
        </ul>
      </section>

      <section className="penurunan-titik-beku">
        <h3>3. Penurunan Titik Beku</h3>
        <p>
          Titik beku larutan berkurang saat zat terlarut ditambahkan. Ini menyebabkan larutan membeku pada suhu lebih 
          rendah daripada pelarut murni.
        </p>
        <p><strong>Rumus:</strong> ΔTf = Kf * m</p>
        <p><em>Dimana:</em></p>
        <ul>
          <li>ΔTf = Penurunan titik beku</li>
          <li>Kf = Konstanta pembekuan molal</li>
          <li>m = Molalitas larutan</li>
        </ul>
      </section>

      <section className="tekanan-osmotik">
        <h3>4. Tekanan Osmotik</h3>
        <p>
          Tekanan osmotik terjadi ketika ada perbedaan konsentrasi antara dua larutan yang dipisahkan oleh membran semi-permeabel. 
          Tekanan ini dihasilkan oleh aliran pelarut melalui membran menuju larutan dengan konsentrasi yang lebih tinggi.
        </p>
        <p><strong>Rumus:</strong> π = MRT</p>
        <p><em>Dimana:</em></p>
        <ul>
          <li>π = Tekanan osmotik</li>
          <li>M = Molaritas larutan</li>
          <li>R = Konstanta gas ideal (0.0821 L·atm/K·mol)</li>
          <li>T = Temperatur dalam Kelvin</li>
        </ul>
        <button className="toggle-button" onClick={toggleOsmoticPressure}>
          {showOsmoticPressure ? 'Sembunyikan Penjelasan' : 'Tampilkan Penjelasan'}
        </button>
        {showOsmoticPressure && (
          <div className="osmotik-detail">
            <p>
              Tekanan osmotik adalah tekanan yang diperlukan untuk menghentikan aliran pelarut melalui membran semi-permeabel. 
              Ini sangat penting dalam proses biologis dan industri.
            </p>
          </div>
        )}
      </section>

      <section className="contoh-soal">
        <h3>Contoh Soal</h3>
        <p><strong>Soal:</strong> Berapakah tekanan osmotik dari larutan NaCl 0,1 M pada suhu 27°C? (Gunakan R = 0,0821 L·atm/K·mol)</p>
        <p><strong>Penyelesaian:</strong></p>
        <p>
          Tekanan osmotik, π = MRT
        </p>
        <p>M = 0,1 M</p>
        <p>T = 27°C + 273 = 300 K</p>
        <p>
          Jadi, π = (0,1)(0,0821)(300) = 2,463 atm
        </p>
        <p><strong>Jawaban:</strong> Tekanan osmotik larutan adalah 2,463 atm.</p>
      </section>
    </div>
  );
}

export default SifatKoligatif;