import React from 'react';
import './ReaksiRedoks.css';

function ReaksiRedoks() {
  return (
    <div className="reaksi-redoks-container">
      <h2>Bab 2: Reaksi Redoks dan Elektrokimia</h2>

      <section className="pengertian-redoks">
        <h3>Pengenalan Reaksi Redoks</h3>
        <p>
          Reaksi redoks (reduksi-oksidasi) adalah reaksi kimia yang melibatkan perpindahan elektron dari satu zat ke zat lain. 
          Dalam reaksi redoks, terdapat dua proses utama:
        </p>
        <ul>
          <li><strong>Oksidasi:</strong> Proses kehilangan elektron.</li>
          <li><strong>Reduksi:</strong> Proses penambahan elektron.</li>
        </ul>
        <p>
          Zat yang mengalami oksidasi disebut agen pereduksi, sedangkan zat yang mengalami reduksi disebut agen pengoksidasi.
        </p>
        <img 
          src="https://example.com/redox_reaction_diagram.png" 
          alt="Diagram Reaksi Redoks" 
          className="redox-img" 
        />
      </section>

      <section className="konsep-elektrokimia">
        <h3>Konsep Elektrokimia</h3>
        <p>
          Elektrokimia adalah cabang ilmu kimia yang mempelajari hubungan antara reaksi kimia dan listrik. 
          Sel elektrokimia adalah perangkat yang dapat menghasilkan listrik dari reaksi kimia atau menggunakan listrik untuk menyebabkan reaksi kimia.
        </p>
        <p>Sel elektrokimia terdiri dari dua jenis utama:</p>
        <ul>
          <li><strong>Sel Galvani (Volta):</strong> Menghasilkan listrik dari reaksi redoks spontan.</li>
          <li><strong>Sel Elektrolisis:</strong> Menggunakan listrik untuk mendorong reaksi redoks non-spontan.</li>
        </ul>
      </section>

      <section className="sel-galvani">
        <h3>1. Sel Galvani (Sel Volta)</h3>
        <p>
          Sel galvani mengubah energi kimia menjadi energi listrik. Contoh umum dari sel galvani adalah baterai. 
          Pada sel galvani, reaksi redoks spontan terjadi antara dua elektroda, yaitu anoda dan katoda:
        </p>
        <ul>
          <li><strong>Anoda:</strong> Elektroda di mana terjadi oksidasi.</li>
          <li><strong>Katoda:</strong> Elektroda di mana terjadi reduksi.</li>
        </ul>
        <p><em>Contoh reaksi:</em> Pada sel seng-tembaga, seng teroksidasi dan tembaga tereduksi.</p>
        <p>
          Zn(s) → Zn²⁺(aq) + 2e⁻ (oksidasi di anoda) <br />
          Cu²⁺(aq) + 2e⁻ → Cu(s) (reduksi di katoda)
        </p>
      </section>

      <section className="sel-elektrolisis">
        <h3>2. Sel Elektrolisis</h3>
        <p>
          Sel elektrolisis menggunakan arus listrik untuk memicu reaksi kimia non-spontan. 
          Salah satu contoh penerapan elektrolisis adalah pemurnian logam dan produksi gas seperti hidrogen dan oksigen dari air.
        </p>
        <p>
          <em>Contoh reaksi:</em> Elektrolisis air menghasilkan gas hidrogen dan oksigen.
        </p>
        <p>
          2H₂O(l) → 2H₂(g) + O₂(g)
        </p>
      </section>

      <section className="contoh-soal">
        <h3>Contoh Soal</h3>
        <p><strong>Soal 1:</strong> Hitung potensial sel untuk sel galvani yang terdiri dari elektroda Zn/Zn²⁺ (E° = -0,76 V) dan elektroda Cu/Cu²⁺ (E° = +0,34 V).</p>
        <p><strong>Penyelesaian:</strong></p>
        <p>
          E°<sub>sel</sub> = E°<sub>katoda</sub> - E°<sub>anoda</sub><br />
          = (+0,34 V) - (-0,76 V)<br />
          = +1,10 V
        </p>
        <p><strong>Jawaban:</strong> Potensial sel adalah +1,10 V.</p>

        <p><strong>Soal 2:</strong> Pada reaksi redoks, mana yang mengalami oksidasi dan reduksi dalam reaksi berikut?<br />
        Zn + Cu²⁺ → Zn²⁺ + Cu</p>
        <p><strong>Penyelesaian:</strong></p>
        <p>
          - Zn mengalami oksidasi menjadi Zn²⁺.<br />
          - Cu²⁺ mengalami reduksi menjadi Cu.
        </p>
        <p><strong>Jawaban:</strong> Zn teroksidasi dan Cu²⁺ tereduksi.</p>
      </section>
    </div>
  );
}

export default ReaksiRedoks;
