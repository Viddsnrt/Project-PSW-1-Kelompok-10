import React, { useState } from 'react';
import './SifatKoligatif.css';
import PersamaanDeltaTb from './PersamaanDeltaTb';
import RumusEncer from './RumusEncer';
import RumusKenaikan from './RumusKenaikan';
import TabelPelarut from './TabelPelarut';

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
        <h4>A. Tekanan uap Pelarut Murni (Po)</h4>
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
        <h4>B. Tekanan uap larutan</h4>
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
          <p><b>Sekarang chimiLearn Squad sudah paham kan kenapa botol yang diisi air panas bisa menguap dan tidak lama kemudian uapnya hilang? Mau memahami konsep kimia lainnya? Nonton video di chimiLearn yuk dan jadikan #BelajarJadiMudah!</b></p>
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
        <img 
          src="https://cdn-web.ruangguru.com/landing-pages/assets/hs/kenaikan%20titik%20didih-1.png" 
          alt="Diagram Sifat Koligatif" 
          className="colligative-img" 
        />
        <h4>A. Pengertian Kenaikan Titik Didih</h4>
        <p>
          <b>Titik didih adalah suhu pada saat tekanan uap jenuh suatu cairan sama dengan tekanan udara di sekitarnya.</b> Titik didih ini dapat mengalami kenaikan bila ditambahkan zat terlarut ke dalam larutan yang kemudian dikenal dengan istilah kenaikan titik didih.
          Jadi, kenaikan titik didih adalah selisih antara titik didih larutan dengan titik didih pelarut. Dalam kimia, kenaikan titik didih ini dinyatakan dengan simbol ΔTb (Tb berasal dari kata boiling).
        </p><br/>

        <h4>B. Proses Kenaikan Titik Didih</h4>
        <p>Titik didih suatu zat cair akan tercapai jika tekanan uap jenuh zat cair tersebut sama dengan tekanan udara di sekitarnya. Jika air murni dipanaskan pada tekanan 1 atm (760 mmHg), maka air tersebut akan mendidih pada suhu 100°C.</p>
        <br/>
        <p>Lalu, bagaimana jika pada suhu yang sama dilarutkan gula? Apakah titik didihnya masih sama? Tentu berbeda, ya.</p>
        <br/>
        <p>Hal ini dikarenakan, pada suhu yang sama dilarutkan gula akan membuat tekanan uap air menurun atau belum mencapai 760 mmHg. Itu artinya, semakin banyak gula yang dilarutkan, maka semakin banyak penurunan tekanan uapnya.</p>
        <br/>
        <p>Akibatnya, larutan gula belum mendidih pada suhu 100°C. Bagaimana agar larutan gula dapat mendidih?</p>
        <br/>
        <p>Agar larutan gula cepat mendidih, diperlukan suhu yang cukup tinggi sehingga tekanan uap jenuhnya sama dengan tekanan uap di sekitarnya. Sebab, pada kondisi tersebut, tekanan uap telah mencapai 760 mmHg.</p>
        <br/>
        <p>Ini artinya, titik didih larutan lebih tinggi daripada titik didih pelarut murninya. Selisih antara titik didih larutan dengan titik didih pelarut murni disebut kenaikan titik didih ΔTb.</p>
        <br/>

        <h4>C. Rumus Kenaikan Titik Didih</h4>
        <p>Adapun rumus kenaikan titik didih larutan adalah sebagai berikut.</p>
        <PersamaanDeltaTb />
        <p><b><br/>
        Keterangan :
        </b></p><br/>
        <p>
        ΔTb = kenaikan titik didih larutan
        </p><br/>
        <p>
        Tb° = titik didih pelarut murni (air)
        </p><br/>
        <p>
        Tb = titik didih larutan
        </p><br/>
        <p>
        Kenaikan titik didih hanya tergantung pada jenis pelarut dan molaritas larutan, tidak tergantung pada jenis zat terlarut.
        </p><br/>
        <p>
        Jika ditambahkan zat terlarut yang tidak mudah menguap, misalnya gula, maka dibutuhkan kenaikan titik didih yang cukup besar agar dapat mendidih. Sebaliknya, jika ditambahkan zat terlarut yang mudah menguap, misalnya etanol, maka kenaikan titik didihnya lebih rendah karena larutan dapat mendidih di bawah titik didih air.
        </p><br/>
        <p>
        Untuk larutan encer, hubungan antara kenaikan titik didih dengan molaritas larutan dinyatakan dengan rumus sebagai berikut.
        </p>
        <RumusEncer />
        <p><br/>
        Jika dijabarkan, maka rumus hubungan antara kenaikan titik didih dengan molaritas larutan ini akan terlihat seperti berikut ini.
        </p>
        <RumusKenaikan />
        <p><b><br/>
        Keterangan :
        </b></p>
        <div>
        <div className="keterangan">
          <ul>
            <li>massa = massa zat terlarut (gram)</li>
            <li>Mr = massa molekul relatif zat terlarut</li>
            <li>P = massa pelarut (gram)</li>
            <li>Kb = tetapan kenaikan titik didih molal (°C m-1)</li>
            <li>m = molalitas larutan (m)</li>
          </ul>
        </div>
      </div>
      <p>
      Perlu diketahui, bahwa pada beberapa jenis pelarut, kenaikan titik didihnya sudah ditetapkan. Dengan begitu, kamu dapat menentukan titik didih suatu larutan, konsentrasi larutan, dan massa molekul relatif dengan lebih mudah. Berikut daftar pelarutnya.
      </p><br/>
      <TabelPelarut /><br/>
      <h4>D. Penerapan Kenaikan Titik Didih</h4>
      <p>
        Berikut adalah beberapa contoh penerapan kenaikan titik didih dalam kehidupan sehari-hari
      </p>
      <p><b><br/>
      Memasak menggunakan garam
      </b></p>
      <p>
      Menambahkan garam ke dalam masakan ternyata tidak hanya menambah cita rasa masakan saja, Quipperian, tetapi juga dapat meningkatkan titik didih air. Hal ini dikarenakan, garam yang ditambahkan ke dalam air akan terdisosiasi menjadi ion natrium dan klorida. Semakin banyak garam yang ditambahkan, maka semakin tinggi kenaikan titik didih air.
      </p><br/>
      <p>
      Penambahan garam ini akan membuat air mendidih dalam waktu yang cukup lama. Cara ini bermanfaat saat kamu memasak makanan yang membutuhkan waktu lama untuk matang seperti daging. Dengan begitu, air tidak lebih dulu mendidih.
      </p><br/>

      <p><b>
      Susu yang Didihkan
      </b></p>
      <p>
      Pernahkah kamu bertanya-tanya mengapa susu dengan suhu rendah lebih lama mendidih dibandingkan air? Hal ini disebabkan, susu mengandung lemak, protein, dan bahan lainnya yang tidak mudah meluap sehingga dibutuhkan suhu yang tinggi untuk mendidihkan susu. Ingat, semakin sulit zat terlarut menguap, maka semakin tinggi kenaikan didih yang dibutuhkan.
      </p><br/>

      <p><b>
      Mendidihkan air di Pegunungan
      </b></p>
      <p>
      Tahukah kamu, kalau mendidihkan air di pegunungan lebih cepat daripada di dataran rendah? Hal ini dikarenakan, pegunungan termasuk dataran tinggi di mana pada kondisi ini uap air akan lebih cepat menguap karena tekanan udara di pegunungan yang rendah.
      </p><br/>
      <p>
      Alhasil, ketika dididihkan, molekul air akan lebih mudah terlepas ke udara menjadi uap. Itulah mengapa, air lebih cepat mendidih ketika dididihkan di dataran tinggi seperti pegunungan ini.
      </p><br/>
      <p>
      Dengan kata lain, titik didih air di pegunungan lebih rendah daripada di dataran rendah.
      </p><br/>

      <section className="contoh-soal-ionisasi">
          <h3>Contoh Soal Kenaikan Titik Didih dan Pembahasannya</h3><br/>
          <p><strong>Soal:</strong> Tentukan kenaikan titik didih larutan gula 0,2 molal jika Kb air = 0,52 °C molal-1</p><br/>
          <p><strong>Penyelesaian:</strong></p><br/>
          <p>
          Bayangin kita lagi bikin teh manis. Kita tahu kalau air murni mendidih di suhu 100°C. Tapi, kalau kita tambahin gula, ternyata airnya jadi lebih lama mendidih. Nah, inilah yang disebut kenaikan titik didih.
          </p><br/>
          <p>
          Kenapa bisa gitu?
          Karena adanya partikel gula yang ngeganggu molekul-molekul air buat menguap. Jadi, buat bikin air gula mendidih, kita butuh suhu yang lebih tinggi dibanding air murni.
          </p><br/>
          <p><strong>Sekarang, kita kembali ke soal:</strong></p><br/>
          <p>
            Kita punya larutan gula dengan konsentrasi 0,2 molal. Artinya, dalam 1 kg air, ada 0,2 mol gula. Kita juga udah dikasih tahu nilai Kb air, yaitu 0,52 °C/molal. Kb ini kayak semacam "konstanta" yang nunjukin seberapa besar kenaikan titik didih suatu pelarut kalau kita larutin 1 mol zat terlarut di dalamnya.
          </p><br/>
          <p><strong>Rumus yang kita pakai:</strong></p><br/>
          <p>
          ΔTb = Kb . m
          </p><br/>
          <p><strong>Yuk kita hitung:</strong></p><br/>
          <p>
          ΔTb = 0,52 °C/molal x 0,2 molal
          </p><br/>
          <p>
          Nah, molal sama molal bisa kita coret, jadi tinggal:
          </p><br/>
          <p>
          ΔTb = 0,104 °C
          </p><br/>
          <p><strong>Artinya apa nih?</strong></p><br/>
          <p>
          Berarti, kalau kita larutin gula sebanyak itu ke dalam air, titik didih larutannya akan naik sebesar 0,104°C. Jadi, kalau air murni mendidih di 100°C, maka larutan gula kita akan mendidih di suhu 100,104°C.
          </p><br/>
        </section>
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
        <img 
          src="https://www.quipper.com/id/blog/wp-content/uploads/2023/03/ice-cubes-table_144627-8764.webp" 
          alt="Penurunan Titik Beku" 
          className="colligative-img" 
        />
        
        <h4>A. Pengertian Penurunan Titik Beku</h4>
        <p>Titik beku adalah suhu dari tekanan tertentu saat terjadi perubahan wujud zat dari cair menjadi padat. Titik beku ini bisa mengalami penurunan atau disebut dengan penurunan titik beku ketika adanya penambahan zat terlarut ke dalam sebuah larutan</p>
        <br/>
        <p>Penurunan titik beku adalah selisih antara titik beku pelarut dengan titik beku larutan. Penurunan titik beku ini termasuk salah satu sifat koligatif larutan. </p>
        <br/>
        <p>Dalam perhitungan kimia, penurunan titik beku disimbolkan dengan ΔTf (f berasal dari kata freeze) atau ΔTb . Peristiwa penurunan titik beku ini sering diterapkan pada negara-negara yang memiliki musim dingin. </p>
        <br/>

        <h4>B. Proses Penurunan Titik Beku</h4>
        <p>Agar lebih mudah memahami proses penurunan titik beku, coba perhatikan saat orang membuat es puter. </p>
        <br/>
        <p>Pada pembuatan es puter, adonan es puter akan ditempatkan pada sebuah wadah yang terendam es batu dan air yang telah diberi garam dapur sambil diputar-putar. Tujuannya adalah agar adonan es puter bisa membeku. </p>
        <br/>
        <p>Proses pembuatan es puter ini sebenarnya sama dengan proses penurunan titik beku. Perlu diketahui, titik beku air murni pada tekanan 760 mmHg adalah 0℃. </p>
        <br/>
        <p>Berhubung, adonan es puter ini bukan lagi berbentuk air murni karena sudah ditambahkan berbagai bahan pembuatan es puter sehingga diperlukan suhu yang lebih dingin untuk membekukannya. </p>
        <br/>
        <p>Dengan kata lain, titik bekunya harus diturunkan lagi. Sebab, jika tekanan uap larutan yang dalam hal ini adalah bahan-bahan pembuat es puter lebih rendah dibandingkan tekanan uap pelarut (air), maka larutan tidak akan membeku pada suhu 0℃. Adonan es puter akan membeku ketika berada pada suhu di bawah 0℃.</p>
        <br/>
        <p>Jadi, intinya proses penurunan titik beku ini terjadi apabila suhu berada di bawah 0℃ untuk air murni, tetapi jika dalam bentuk larutan, contohnya seperti adonan es puter ini, suhu harus berada di bawah 0℃ agar adonan es bisa membeku. </p>
        <br/>

        <h4>C. Rumus Penurunan Titik Beku</h4>
        <p>Untuk mengetahui penurunan titik beku larutan, kamu dapat menghitungnya dengan rumus penurunan titik beku berikut ini. </p>
        <br/>
        <p><b><br/>
        Keterangan :
        </b></p>
        <p>ΔTf = penurunan titik beku larutan</p>
        <br/>
        <p>Tf° = titik beku pelarut murni (air)</p>
        <br/>
        <p>Tf = titik beku larutan</p>
        <br/>
        <p>Titik beku tidak bergantung pada jenis zat terlarut, tetapi tergantung pada konsentrasi atau jumlah partikel zat terlarut dalam larutan. Semakin besar konsentrasi larutan, maka semakin besar penurunan titik bekunya. Coba perhatikan diagram berikut ini. </p>
        <br/>
        poto
        <p><b><br/>
        Keterangan :
        </b></p>
        <p>Tf° = titik beku pelarut murni (air)</p>
        <br/>
        <p>Tf = titik beku larutan</p>
        <br/>
        <p>ΔTf = Tf° – Tf = penurunan titik beku larutan</p>
        <br/>
        <p>Dari diagram di atas, dapat diketahui bahwa penurunan titik beku berbanding lurus dengan kemolalan larutan. Hubungan antara titik beku larutan dan kemolalan ini dapat dituliskan pada rumus berikut ini. </p>
        <br/>
        <p>Jika dijabarkan, maka rumus hubungan antara titik beku larutan dan kemolalan ini akan terlihat seperti berikut ini. </p>
        <br/>

        <h4>D. </h4>
        <p></p>
        <br/>
        <p></p>
        <br/>
        <p></p>
        <br/>
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