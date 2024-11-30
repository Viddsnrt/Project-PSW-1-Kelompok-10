import React from "react";
import './KimiaUnsur.css';

function KimiaUnsur() {
  return (
    <div className="kimia-unsur-container">
      <h2>Bab 3: Kimia Unsur</h2>
      <p className="intro-text">
        Kimia unsur adalah cabang kimia yang mempelajari sifat, keberadaan, reaksi, dan kegunaan unsur-unsur kimia dalam tabel periodik.
        Pembahasan mencakup unsur golongan utama, golongan transisi, hingga unsur langka.
      </p>

      {/* Section A */}
      <section>
        <h3 className="section-title">A. Kelimpahan Unsur-unsur di Alam</h3>
        <p>
          Sebagian besar unsur di alam terdapat sebagai senyawa, sedangkan hanya sebagian kecil yang terdapat sebagai unsur bebas.
          Bahan-bahan alam yang mengandung unsur atau senyawa tertentu disebut mineral, sedangkan mineral yang diolah secara komersial disebut bijih.
        </p>
        <table className="content-table">
          <thead>
            <tr>
              <th>Anion</th>
              <th>Contoh Mineral</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tidak ada</td>
              <td>Au, Ag, Pt, Cu, Bi, As, Sb, Os, Ir, Ru, Rh, Pd</td>
            </tr>
            <tr>
              <td>Oksida</td>
              <td>Fe2O3, Fe3O4, Al2O3, SnO, SiO2</td>
            </tr>
            <tr>
              <td>Sulfida</td>
              <td>CuFeS2, Cu2S, ZnS, PbS, FeS2, HgS</td>
            </tr>
            <tr>
              <td>Klorida</td>
              <td>NaCl, KCl, KCl-MgCl2</td>
            </tr>
            <tr>
              <td>Karbonat</td>
              <td>CaCO3, MgCO3, MgCO3.CaCO3</td>
            </tr>
            <tr>
              <td>Sulfat</td>
              <td>CaSO4.2H2O, MgSO4.7H2O, BaSO4</td>
            </tr>
            <tr>
              <td>Silikat</td>
              <td>Be3Al2Si6O18, Al2Si2O8(OH)4</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Section B */}
      <section>
        <h3 className="section-title">B. Gas Mulia</h3>
        <p>
          Gas mulia adalah unsur-unsur dalam golongan VIIIA (lajur paling kanan tabel periodik) yang meliputi helium (He), neon (Ne), argon (Ar), kripton (Kr),
          xenon (Xe), dan radon (Rd). Gas mulia cenderung stabil karena memiliki konfigurasi elektron penuh (oktet/duplet).
        </p>
        <ul>
          <li><b>Helium (He):</b> Digunakan sebagai cairan pendingin karena memiliki titik didih paling rendah.</li>
          <li><b>Neon (Ne):</b> Digunakan pada lampu neon.</li>
          <li><b>Argon (Ar):</b> Melindungi logam panas dalam pengelasan.</li>
          <li><b>Kripton (Kr) dan Xenon (Xe):</b> Digunakan untuk lampu listrik.</li>
          <li><b>Radon (Rn):</b> Digunakan sebagai sumber partikel alfa untuk pengobatan kanker.</li>
        </ul>
      </section>

      {/* Section C */}
      <section>
        <h3 className="section-title">C. Halogen</h3>
        <p>
          Unsur-unsur halogen terdiri dari fluor (F), klor (Cl), brom (Br), iodium (I), dan astatin (At). Mereka dikenal sebagai "pembentuk garam"
          karena sangat reaktif dan membentuk garam ketika bereaksi dengan logam.
        </p>
        <ul>
          <li><b>Fluor:</b> Digunakan untuk membuat teflon dan zat pendingin.</li>
          <li><b>Klor:</b> Digunakan untuk membuat PVC dan desinfektan seperti kaporit.</li>
          <li><b>Brom:</b> Digunakan dalam fotografi dan zat pemadam kebakaran.</li>
          <li><b>Iod:</b> Digunakan dalam obat luka (tingtur iodium) dan uji amilum.</li>
        </ul>
      </section>

      {/* Section D */}
      <section>
        <h3 className="section-title">D. Unsur Periode Ketiga</h3>
        <p>
          Unsur-unsur periode ketiga meliputi Na, Mg, Al, Si, P, S, Cl, dan Ar. Unsur-unsur ini menunjukkan sifat yang bervariasi dari logam alkali
          hingga gas mulia.
        </p>
        <ul>
          <li><b>Aluminium (Al):</b> Digunakan untuk kabel, peralatan dapur, dan aluminium foil.</li>
          <li><b>Silikon (Si):</b> Penting dalam pembuatan elektronik dan bahan konstruksi seperti kaca.</li>
          <li><b>Fosfor (P):</b> Digunakan dalam pupuk fosfat dan bidang gesek korek api.</li>
          <li><b>Belerang (S):</b> Membentuk asam sulfat, salah satu bahan kimia industri paling penting.</li>
        </ul>
      </section>

      {/* Section E */}
      <section>
        <h3 className="section-title">E. Unsur Transisi Periode Keempat</h3>
        <p>
          Unsur transisi periode keempat meliputi Sc, Ti, V, Cr, Mn, Fe, Co, Ni, Cu, dan Zn. Unsur-unsur ini dikenal karena memiliki bilangan oksidasi
          yang bervariasi dan cenderung membentuk senyawa berwarna.
        </p>
        <ul>
          <li><b>Besi (Fe):</b> Digunakan untuk pembuatan baja.</li>
          <li><b>Tembaga (Cu):</b> Digunakan dalam kabel listrik dan bahan konduktor.</li>
          <li><b>Seng (Zn):</b> Digunakan dalam galvanisasi dan pembuatan paduan logam.</li>
        </ul>
      </section>
    </div>
  );
}

export default KimiaUnsur;
