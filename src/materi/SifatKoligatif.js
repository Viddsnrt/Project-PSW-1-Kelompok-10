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
          src="https://th.bing.com/th/id/OIP.KnCHtp5zZylDUYm0xJ3-dQHaFj?w=960&h=720&rs=1&pid=ImgDetMain" 
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
        <p>
          Ketika kamu mengisi botol minum dengan air panas, botol tersebut juga terisi uap. Tapi, kejadian itu tidak berlangsung lama. RG Squad tahu kenapa? Kejadian itu akibat dari adanya proses penguapan dan penurunan tekanan uap. Untuk memahami fenomenanya, lebih baik kamu simak terlebih dahulu pengertian tekanan uap pada pelarut murni. Selain itu juga pelajari besarnya tekanan uap yang dipengaruhi oleh penambahan zat terlarut ke dalam pelarut murni. Simak terus!
        </p><br/>
        <h4>1. Tekanan uap Pelarut Murni (Po)</h4>
        <br/>
        <div className="image-container">
          <img 
            src="https://cdn-web.ruangguru.com/landing-pages/assets/hs/Penurunan%20tekanan%20uap%201.jpg" 
            alt="Proses Terjadinya Penurunan Tekanan Uap" 
            className="colligative-img" 
          />
          <p>Di awal terjadi perpindahan partikel dari fase cair ke gas, namun akhirnya terjadi keseimbangan dengan perpindahan partikel dari fase gas ke fase cair.</p>
        </div>
        <p>
        Coba kamu perhatikan, boleh juga sambil memperagakan ya. Jika pelarut murni dimasukkan ke dalam suatu tempat tertutup, maka akan terjadi perpindahan partikel dari fase cair ke fase gas, dan juga sebaliknya. Jumlah partikel pelarut murni pada fase gas memberikan suatu tekanan yang disebut tekanan uap. Setelah beberapa waktu, jumlah partikel pelarut murni yang melepaskan diri dari fase cair ke fase gas, sama dengan jumlah partikel pelarut murni di fase gas yang terperangkap di permukaan fase cair. Di saat keadaan seperti ini, dapat dikatakan bahwa kesetimbangan dinamis telah tercapai. Secara umum, tekanan uap dapat didefinisikan sebagai berikut:
        </p><br/>
        <h4>2. Tekanan uap larutan</h4>
        <p>Apabila ke dalam pelarut murni di atas ditambahkan sejumlah zat terlarut, apa yang akan terjadi pada nilai tekanan uap larutan?</p>
        <br/>
        <div className="image-container">
          <img 
            src="https://cdn-web.ruangguru.com/landing-pages/assets/hs/Penurunan%20tekanan%20uap%202.jpg" 
            alt="Proses Terjadinya Penurunan Tekanan Uap" 
            className="colligative-img" 
          />
          <p>Proses tekanan uap larutan.</p>
        </div>
        <p>
          Dari penjelasan di atas, bisa lihat bahwa tekanan uap larutan ternyata lebih kecil dibandingkan tekanan uap pelarut murninya. Inilah sebenarnya yang dimaksud dengan penurunan tekanan uap (∆P) larutan.
        </p><br/>
        <p>Dengan demikian, penurunan tekanan uap larutan (∆P) data ditulis sebagai:</p>
        <img 
            src="https://cdn-web.ruangguru.com/landing-pages/assets/hs/mata%20pelajaran%20rgdb.png" 
            alt="Proses Terjadinya Penurunan Tekanan Uap" 
            className="colligative-img1" 
          />
          <p><b>Sekarang Kimia Squad sudah paham ‘kan kenapa botol yang diisi air panas bisa menguap dan tidak lama kemudian uapnya hilang? Mau memahami konsep kimia lainnya? Nonton video di Kimia yuk dan jadikan #BelajarJadiMudah!</b></p>
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

      <section className="efek-ionisasi">
        <h3>5. Efek Ionisasi dalam Larutan Elektrolit</h3>
        <p>
          Pada larutan elektrolit seperti NaCl atau K₂SO₄, zat terlarut akan terionisasi menjadi ion-ion yang bebas. 
          Ini menyebabkan jumlah partikel dalam larutan lebih banyak daripada jumlah mol zat terlarut awalnya. Oleh karena itu, efek sifat koligatif seperti penurunan tekanan uap, peningkatan titik didih, dan penurunan titik beku akan lebih besar.
        </p>
        <p><strong>Rumus penyesuaian:</strong> ΔTf = i * Kf * m</p>
        <p><em>Dimana:</em></p>
        <ul>
          <li>i = Faktor Van 't Hoff (jumlah ion yang terbentuk dalam larutan)</li>
          <li>Kf = Konstanta pembekuan molal</li>
          <li>m = Molalitas larutan</li>
        </ul>
      </section>

      <section className="molalitas-vs-molaritas">
        <h3>6. Perbedaan Molalitas dan Molaritas</h3>
        <p>
          Molalitas (m) adalah jumlah mol zat terlarut per kilogram pelarut, sementara molaritas (M) adalah jumlah mol zat terlarut per liter larutan. 
          Molalitas lebih bergantung pada massa pelarut, sehingga tidak terpengaruh oleh perubahan suhu, sedangkan molaritas tergantung pada volume larutan, yang dapat berubah dengan suhu.
        </p>
      </section>

      <section className="pengaruh-suhu">
        <h3>7. Pengaruh Suhu terhadap Sifat Koligatif</h3>
        <p>
          Suhu dapat mempengaruhi perubahan sifat koligatif, seperti titik didih dan titik beku. Sebagai contoh, peningkatan suhu menyebabkan peningkatan energi kinetik partikel dalam larutan, yang pada gilirannya dapat mengubah sifat koligatif larutan.
        </p>
        <p>
          Pada suhu yang lebih tinggi, tekanan uap larutan juga akan meningkat, menyebabkan peningkatan titik didih. Sebaliknya, penurunan suhu menyebabkan penurunan titik beku larutan.
        </p>
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
      
      <section className="contoh-soal-ionisasi">
        <h3>Contoh Soal Efek Ionisasi dalam Larutan Elektrolit</h3>
        <p><strong>Soal:</strong> Sebuah larutan K₂SO₄ 0,2 m (molal) disiapkan dengan menggunakan pelarut air. Hitunglah penurunan titik beku larutan tersebut, jika konstanta pembekuan molal air (Kf) adalah 1,86°C·kg/mol.</p>
        <p><strong>Penyelesaian:</strong></p>
        <p>
          Karena K₂SO₄ adalah elektrolit, ia terionisasi menjadi 3 ion (2 K⁺ dan 1 SO₄²⁻). Oleh karena itu, faktor Van 't Hoff (i) untuk K₂SO₄ adalah 3.
        </p>
        <p>
          Rumus penurunan titik beku: ΔTf = i * Kf * m
        </p>
        <p>
          Dimana: <br />
          i = 3 (faktor ionisasi K₂SO₄) <br />
          Kf = 1,86°C·kg/mol <br />
          m = 0,2 m
        </p>
        <p>
          Jadi, ΔTf = 3 * 1,86 * 0,2 = 1,116°C
        </p>
        <p><strong>Jawaban:</strong> Penurunan titik beku larutan K₂SO₄ adalah 1,116°C.</p>
      </section>

    </div>
  );
}

export default SifatKoligatif;