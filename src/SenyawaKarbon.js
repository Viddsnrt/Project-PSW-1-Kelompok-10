import React from "react";
import "./SenyawaKarbon.css";

function SenyawaKarbon() {
  return (
    <div className="senyawa-karbon-container">
      <h1 className="main-title">Bab 4: Senyawa Karbon</h1>
      <p className="intro-text">
        Senyawa karbon adalah senyawa kimia yang mengandung unsur karbon sebagai bagian utama struktur molekulnya. Senyawa ini meliputi hidrokarbon
        seperti alkana, alkena, alkuna, serta senyawa organik lainnya seperti alkohol, aldehida, keton, asam karboksilat, dan ester.
      </p>

      {/* Section A */}
      <section>
        <h2 className="section-title">A. Hidrokarbon</h2>
        <p>
          Hidrokarbon adalah senyawa yang hanya terdiri dari atom karbon (C) dan hidrogen (H). Hidrokarbon dapat dikategorikan menjadi tiga jenis:
        </p>
        <ul>
          <li>
            <b>Alkana:</b> Hidrokarbon jenuh dengan ikatan tunggal, seperti metana (CH<sub>4</sub>) dan etana (C<sub>2</sub>H<sub>6</sub>).
          </li>
          <li>
            <b>Alkena:</b> Hidrokarbon tak jenuh dengan satu atau lebih ikatan rangkap dua, seperti etena (C<sub>2</sub>H<sub>4</sub>).
          </li>
          <li>
            <b>Alkuna:</b> Hidrokarbon tak jenuh dengan satu atau lebih ikatan rangkap tiga, seperti etuna (C<sub>2</sub>H<sub>2</sub>).
          </li>
        </ul>
      </section>

      {/* Section B */}
      <section>
        <h2 className="section-title">B. Senyawa Turunan Hidrokarbon</h2>
        <p>Senyawa turunan hidrokarbon adalah senyawa organik yang mengandung atom karbon tetapi juga memiliki gugus fungsi tertentu.</p>
        <ul>
          <li>
            <b>Alkohol (R-OH):</b> Mengandung gugus hidroksil (-OH). Contoh: etanol (C<sub>2</sub>H<sub>5</sub>OH).
          </li>
          <li>
            <b>Aldehida (R-CHO):</b> Mengandung gugus karbonil (-CHO). Contoh: formaldehida (HCHO).
          </li>
          <li>
            <b>Keton (R-CO-R’):</b> Mengandung gugus karbonil di antara dua atom karbon. Contoh: aseton (CH<sub>3</sub>COCH<sub>3</sub>).
          </li>
          <li>
            <b>Asam karboksilat (R-COOH):</b> Mengandung gugus karboksil (-COOH). Contoh: asam asetat (CH<sub>3</sub>COOH).
          </li>
          <li>
            <b>Ester (R-COOR’):</b> Dibentuk dari reaksi antara asam karboksilat dan alkohol. Contoh: metil butanoat.
          </li>
        </ul>
      </section>

      {/* Section C */}
      <section>
        <h2 className="section-title">C. Reaksi-reaksi Senyawa Karbon</h2>
        <p>
          Senyawa karbon mengalami berbagai jenis reaksi kimia. Beberapa reaksi penting adalah:
        </p>
        <ul>
          <li>
            <b>Reaksi Substitusi:</b> Penggantian atom atau gugus atom dalam senyawa. Contoh: klorinasi metana menghasilkan metil klorida.
          </li>
          <li>
            <b>Reaksi Adisi:</b> Penambahan atom atau gugus atom pada ikatan rangkap. Contoh: hidrogenasi alkena menghasilkan alkana.
          </li>
          <li>
            <b>Reaksi Eliminasi:</b> Penghilangan gugus atom dari molekul. Contoh: dehidrasi alkohol menghasilkan alkena.
          </li>
          <li>
            <b>Reaksi Esterifikasi:</b> Pembentukan ester dari asam karboksilat dan alkohol. Contoh: pembentukan metil asetat.
          </li>
        </ul>
      </section>

      {/* Section D */}
      <section>
        <h2 className="section-title">D. Aplikasi Senyawa Karbon</h2>
        <p>
          Senyawa karbon memiliki banyak aplikasi dalam kehidupan sehari-hari:
        </p>
        <ul>
          <li>
            <b>Bahan bakar:</b> Metana dan propana digunakan sebagai bahan bakar rumah tangga dan industri.
          </li>
          <li>
            <b>Pelarut:</b> Etanol digunakan sebagai pelarut organik dan antiseptik.
          </li>
          <li>
            <b>Pestisida:</b> Senyawa karbon seperti DDT digunakan untuk melawan hama.
          </li>
          <li>
            <b>Pembuatan plastik:</b> Polietilena dan PVC dibuat dari hidrokarbon.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default SenyawaKarbon;
