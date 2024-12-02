import React, { useState } from 'react';
import './SifatKoligatif.css';
import PersamaanDeltaTb from './PersamaanDeltaTb';
import RumusEncer from './RumusEncer';
import RumusKenaikan from './RumusKenaikan';
import TabelPelarut from './TabelPelarut';
import RumusHubungan from './RumusHubungan';
import TabelPelarut2 from './TabelPelarut2';
import RumusOsmotik from './RumusOsmotik';
import RumusMolalitas from './RumusMolalitas';
import RumusMolaritas from './RumusMolaritas';
import TabelMoliri from './TabelMoliri';

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
          <h3>Contoh Soal Kenaikan Titik Didih</h3><br/>
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
          <li>ΔTf = penurunan titik beku larutan</li>
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
        <img 
          src="https://cdn.utakatikotak.com/20170422/20170422_092354diagram-fase-penurunan-titik-beku.jpg" 
          alt="Penurunan Titik Beku" 
          className="colligative-img" 
        />
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
        <RumusHubungan />
        <p><b><br/>
        Keterangan :
        </b></p>
        <p>Tf = titik beku larutan</p>
        <br/>
        <p>Mr = massa molekul relatif zat terlarut </p>
        <br/>
        <p>P = massa pelarut (gram)</p>
        <br/>
        <p>Kf = tetapan penurunan titik beku molal (℃ m-1)</p>
        <br/>
        <p>m = molalitas larutan (m)</p>
        <br/>
        <p>Beberapa pelarut ada yang sudah ditentukan harga tetapan penurunan titik bekunya (Kf). Berikut daftar pelarutnya. </p>
        <br/>
        <TabelPelarut2 />

        <h4>D. Penerapan Penurunan Titik Beku</h4>
        <p>Penurunan titik beku ini cukup sering digunakan dalam kehidupan sehari-hari. Mulai dari pembuatan makanan hingga kendaraan. </p>
        <br/>
        <p>Berikut adalah beberapa contoh penerapan penurunan titik beku dalam kehidupan sehari-hari. </p>
        <br/>
        <p><b>
        1. Pembuatan es krim
        </b></p>
        <p>Selain es puter, penurunan titik beku juga diterapkan dalam pembuatan es krim. Caranya sama, yaitu dengan menambahkan garam pada es agar suhu menjadi turun. </p>
        <br/>
        <p>Jika suhu tidak diturunkan atau tetap pada besaran 0℃, maka air yang terdapat dalam adonan es krim akan lebih cepat membeku. Alhasil, tekstur es krim pun menjadi keras. </p>
        <br/>
        <p>Namun, jika suhu diturunkan di bawah titik beku air dengan cara menambahkan garam pada es, lalu ditambahkan pengemulsi es krim (whipping cream atau SP) ke dalam adonan, maka akan menghasilkan es krim yang lembut. </p>

        <p><b><br/>
        2. Mencairkan salju di jalanan
        </b></p>
        <p>Musim dingin selalu identik dengan salju dan udara dingin. Salju yang turun terlalu lebat ini dapat menyebabkan jalanan tertutup es sehingga membuat kendaraan tidak dapat melintasi jalanan tersebut. </p>
        <br/>
        <p>Salah satu cara mengatasinya adalah dengan mencairkan salju di jalanan tersebut menggunakan garam. Hal ini akan membuat larutan air pada es dan garam memiliki titik beku yang lebih rendah daripada air murni karena penurunan titik beku larutan. </p>
        <br/>
        <p>Air biasanya akan membeku pada suhu 0°C, tetapi ketika ditambahkan garam, suhunya akan turun. Semakin tinggi konsentrasi garam, maka semakin rendah titik beku air. </p>
        
        <p><b><br/>
        3. Antibeku pada radiator mobil
        </b></p>
        <p>Musim dingin tidak hanya membuat udara menjadi dingin dan jalanan ditutupi salju saja, tapi juga dapat menyebabkan air radiator mobil menjadi lebih cepat beku. Jika dibiarkan saja, maka radiator mobil akan cepat rusak. </p>
        <br/>
        <p>Sebagai tindakan pencegahan, biasanya ditambahkan etilen glikol ke dalam air radiator sehingga titik beku air dalam radiator menurun. Dengan kata lain, air jadi tidak mudah membeku. </p>

        <p><b><br/>
        4. Air laut
        </b></p>
        <p>Ketika musim dingin, air laut tidak membeku secara menyeluruh. Hal ini dikarenakan kandungan garam yang terdapat di dalam air laut sehingga membuat suhu air laut berada di bawah titik beku air murni. </p>
        <br/>

        <section className="contoh-soal-ionisasi">
          <h3>Contoh Soal Penurunan Titik Beku</h3><br/>
          <p><strong>Soal:</strong> Suatu larutan dibuat dengan cara melarutkan 3 gram urea CO(NH2)2 dalam 100 gram air. (Kf air = 1,86 °C/m Ar C = 12, O = 16, N = 14, H = 1). Tentukan penurunan titik bekunya. </p><br/>
          <p><strong>Apa yang diketahui dari soal?</strong></p>
          <div className="keterangan">
            <ul>
              <li>Kita punya urea (bayangin aja kayak pupuk tanaman) yang dilarutkan dalam air.</li>
              <li>Jumlah urea-nya 3 gram, dan airnya 100 gram.</li>
              <li>Kita juga dikasih tahu nilai Kf air (konstanta penurunan titik beku) yang nilainya 1,86 °C/m. Kf ini kayak semacam angka ajaib yang udah ditentukan untuk setiap pelarut.</li>
            </ul>
          </div>
          <p><strong>Apa yang mau kita cari?</strong></p>
          <p>
          Kita mau tahu berapa derajat penurunan titik beku larutan urea kita.
          </p><br/>
          <p><strong>Cara ngerjainnya:</strong></p><br/>
          <p><b>
          1. Hitung Mr urea:
          </b></p>
          <p>Mr itu kayak berat molekul dari suatu zat. Jadi, kita hitung dulu berapa berat molekul urea. Caranya tinggal jumlahkan aja massa atom dari semua unsur yang ada di urea. Udah dihitung di soal, ternyata Mr urea itu 60.</p>
          <p><b><br/>
          2. Hitung penurunan titik beku (ΔTf):
          </b></p>
          <p>Kita punya rumus: ΔTf = Kf x (massa zat terlarut / Mr zat terlarut) x (1000 / massa pelarut)</p>
          <div className="keterangan">
            <ul>
              <li>Kf: Udah dikasih di soal, yaitu 1,86 °C/m.</li>
              <li>massa zat terlarut: Ini adalah massa urea yang kita larutkan, yaitu 3 gram.</li>
              <li>Mr zat terlarut: Ini yang tadi udah kita hitung, yaitu 60.</li>
              <li>massa pelarut: Ini adalah massa airnya, yaitu 100 gram.</li>
            </ul>
          </div>
          <p>Kalau kita masukin semua angka ke rumus, kita dapat hasil ΔTf = 0,93 °C. Artinya, titik beku larutan urea kita turun sebesar 0,93 derajat Celcius dibandingkan dengan titik beku air murni (yang biasanya 0°C).</p>
          <p><b><br/>
          3. Hitung titik beku larutan:
          </b></p>
          <p>Karena titik beku turun 0,93 °C, berarti titik beku larutan urea kita adalah 0°C - 0,93°C = -0,93°C.</p><br/>
          <p><strong>Jadi kesimpulannya:</strong></p>
          <p>
          Kalau kita larutkan 3 gram urea dalam 100 gram air, titik beku larutannya akan menjadi -0,93°C. Artinya, kita perlu suhu yang lebih dingin dari 0°C untuk membekukan larutan ini.
          </p><br/>
        </section>
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
          <img 
            src="https://cdn.utakatikotak.com/20200504/20200504_041741tekanan_osmosis.png" 
            alt="Penurunan Titik Beku" 
            className="colligative-img" 
          />

        <h4>A. Apa yang Dimaksud dengan Tekanan Osmotik?</h4>
        <p>Tekanan osmotik adalah sifat ‘koligatif’, seperti penurunan titik beku, yang berarti bergantung pada jumlah partikel dalam larutan tetapi tidak bergantung pada identitas kimianya. </p>
        <br/>
        <p>Tekanan osmotik secara sederhana dapat dijelaskan sebagai tekanan minimum pada larutan untuk mencegah aliran molekul pelarut melalui membran semipermeabel.</p>
        <br/>
        <p>Membran semipermeabel memiliki pori-pori kecil yang memungkinkan pergerakan pelarut antara dua larutan yang berbeda. </p>
        <br/>
        <p>Setiap larutan secara alami akan memiliki tingkat konsentrasi yang berbeda, dan tekanan osmotik yang diperlukan untuk mencegah aliran pelarut akan berbeda pula</p>
        <br/>
        <p>Tekanan osmotik tidak diciptakan oleh larutan tetapi muncul ketika larutan dipisahkan dari pelarut oleh membran semipermeabel.</p>
        <br/>
        <p>Jika tekanan yang diterapkan pada larutan lebih besar dari tekanan osmotik larutan, maka pelarut mulai berpindah dari larutan ke pelarut. Fenomena ini disebut reverse osmosis. Proses ini digunakan untuk pemurnian air laut dan air keras.</p>
        <br/>
        <p>Cara kerja tekanan osmotik dapat digambarkan dengan mudah melalui gambaran dari tiga taabung di bawah ini.</p>
        <br/>
        <p>
        1. Bagian kiri tabung U berisi larutan berair, dan bagian kanan terdiri dari air murni. 
        </p>
        <p>
        2. Di sini, air murni mencoba mengencerkan larutan dengan menembus membran semipermeabel tetapi berat yang ditambahkan oleh air pada tabung kiri menimbulkan tekanan untuk menahan osmosis.
        </p>
        <p>
        3. Ini berlangsung sampai keseimbangan dipertahankan.
        </p>
        <p>
        4. Sekarang untuk mencapai tekanan osmotik, tingkatkan tekanan hidrostatik pada sisi larutan membran. Ini kemudian menekan molekul pelarut lebih dekat, meningkatkan kecenderungan untuk melarikan diri.
        </p>
        <p>
        5. Kecenderungan keluarnya larutan ini dapat ditingkatkan sampai menjadi sama dengan molekul dalam pelarut murni.
        </p>
        <p>
        6. Dan pada titik ini, osmosis akan berhenti. Tekanan osmotik adalah tekanan yang diperlukan untuk mencapai keseimbangan osmotik.
        </p><br/>
        
        <h4>B. Apa Manfaat dari Tekanan Osmotik?</h4>
        <p>Tekanan osmotik memiliki keuntungan untuk mengetahui massa molar dibandingkan sifat koligatif lainnya.</p>
        <br/>
        <p>Hal ini  dikarenakan pengukuran tekanan berada di sekitar suhu kamar dan molaritas digunakan sebagai pengganti molalitas</p>
        <br/>
        <p>Dibandingkan dengan sifat koligatif lainnya, besarnya tekanan osmotik cukup besar bahkan untuk larutan encer.</p>
        <br/>
        <p>Teknik tekanan osmotik untuk penentuan massa molar zat terlarut sangat berguna untuk biomolekul karena umumnya tidak stabil pada suhu yang lebih tinggi dan polimer memiliki kelarutan yang buruk.</p>
        <br/>

        <h4>C. Apa Faktor yang Mempengaruhi Tekanan Osmotik?</h4>
        <p>Faktor-faktor yang mempengaruhi tekanan osmotik adalah konsentrasi dan suhu zat terlarut.</p>
        <br/>
        <p>Konsentrasi zat terlarut adalah jumlah partikel zat terlarut dalam satuan volume larutan yang secara langsung menentukan tekanan osmotik potensialnya.</p>
        <br/>
        <p>Sedangkan pada suhu, tekanan osmotik akan meningkat apabila suhunya juga ikut meningkat</p>
        <br/>

        <h4>D. Seberapa Penting Tekanan Osmotik dalam Tubuh?</h4>
        <p>Tekanan osmotik penting dalam tubuh manusia untuk menjaga cairan dalam tubuh. Ketika kita memiliki asupan air yang cukup, air mengalir melalui aliran darah dan berdifusi ke dalam sel melalui osmosis. </p>
        <br/>
        <p>Namun, jika asupan air kurang, maka air di dalam tubuh kita akan berpindah ke dalam darah sehingga meningkatkan konsentrasi garam dalam tubuh kita. Kondisi ini secara langsung dapat mempengaruhi fungsi sel sehingga menyebabkan dehidrasi. </p>
        <br/>
        <p>Jumlah tekanan osmotik yang tepat terjadi ketika ada asupan air yang cukup, sehingga menghasilkan gaya hidup sehat.</p>
        <br/>
        <p>Contoh lain tekanan osmotik dalam tubuh adalah di tubulus ginjal, penurunan/penurunan tekanan osmotik menyebabkan penurunan produksi hormon antidiuretik (ADH)/Vasopressin. </p>
        <br/>
        <p>Hal ini menurunkan permeabilitas tubulus kontortus distal dan saluran pengumpul terhadap air. Lebih sedikit air yang diserap kembali menghasilkan ekskresi urin encer dalam jumlah besar. </p>
        <br/>
        <p>Penurunan tekanan osmotik seperti itu dapat terjadi karena penyerapan air dalam jumlah besar atau dalam cuaca dingin saat keringat tidak terjadi.</p>
        <br/>

        <h4>E. Contoh Tekanan Osmotik dalam Kehidupan Sehari-hari</h4>
        <p>Apa saja contoh penerapan tekanan osmotik di kehidupan sehari-hari? Berikut ini beberapa contoh yang ada atau sering kamu alami, seperti:</p>
        <br/>
        <p>
        1. Terlalu lama berendam di bak mandi menyebabkan jari-jari mengkerut atau disebut  pruning.
        </p>
        <p>
        2. Percikan garam pada cacing tanah menyebabkan sel-selnya mengalami dehidrasi sehingga membuat cacing terdesak dan muncul ke permukaan.
        </p>
        <p>
        3. Proses pengawetan selai dan jeli yang menggunakan gula dalam jumlah banyak akan membantu membunuh bakteri. Hal ini dikarenakan larutan gula memiliki konsentrasi tinggi. 
        </p><br/>

        <h4>D. Apa rumus tekanan osmotik?</h4><br/>
        <p>
        Tekanan osmotik dapat dihitung dengan menggunakan rumus:
        </p>
        <RumusOsmotik /><br/>
        <p>
        Rumus ini dapat diterapkan untuk menghitung tekanan osmotik ketika larutan dianggap ideal, yaitu ketika konsentrasi zat terlarut rendah. 
        </p><br/>
        <p>
        Dalam rumus, c adalah konsentrasi molar zat terlarut, yaitu jumlah awal atom, ion, atau molekul yang ada dalam zat terlarut. Khususnya, jumlah partikel menentukan interaksi mereka dalam osmosis. 
        </p><br/>
        <p>
        R adalah tetapan gas ideal. Dalam hal ini, itu juga mengacu pada cairan seperti air. T mengacu pada suhu di Kelvin. 
        </p><br/>
        <p>
        Tekanan osmotik suatu larutan dapat ditingkatkan dengan menaikkan suhunya. Suhu, dalam skenario ini, mengacu pada ukuran energi dalam molekul. 
        </p><br/>
        <p>
        Tekanan osmotik suatu larutan dapat ditingkatkan dengan meningkatkan jumlah molekul zat terlarut. 
        </p><br/>
        <p>
        Maka, untuk menghitung tekanan osmotik larutan dapat menggunakan rumus: <b>π = MRT</b>, di mana M adalah molaritas larutan.
        </p><br/>
        <p>
        Rumus lain untuk menghitung tekanan osmotik adalah <b>π = n/VRT</b> dengan V adalah volume air.
        </p><br/>

        <section className="contoh-soal-ionisasi">
          <h3>Contoh soal tekanan osmotik</h3><br/>
          <p><strong>Soal:</strong> Satu mol garam meja dilarutkan ke dalam air dengan volume satu liter. Pada suhu 270C. Tentukan tekanan osmotik larutan tersebut. </p><br/>
          <p>
          <b>Bayangkan kita punya gelas berisi air.</b> Terus, kita tambahin garam dapur (NaCl) ke dalam air itu sampai jumlahnya pas 1 mol. Nah, air dalam gelas ini sekarang jadi larutan garam.
          </p><br/>
          <p><strong>Tekanan Osmotik itu Apa Sih?</strong></p><br/>
          <p>
          Kalau kita bayangin, partikel-partikel garam (ion Na+ dan Cl-) itu kayak anak kecil yang suka berlarian dan nabrak-nabrak dinding gelas. Nah, tekanan yang dihasilkan dari "tabrakan" partikel-partikel ini ke dinding gelas inilah yang disebut tekanan osmotik. Semakin banyak partikel garam, semakin sering mereka nabrak-nabrak, dan semakin besar tekanan osmosanya.
          </p><br/>
          <p><strong>Kenapa Faktor van't Hoff Jadi 2?</strong></p><br/>
          <p>
          Garam dapur (NaCl) itu kalau dilarutkan di air, dia akan pecah jadi dua bagian, yaitu ion Na+ dan ion Cl-. Jadi, setiap molekul NaCl yang kita larutkan, akan menghasilkan 2 partikel yang aktif bikin tekanan osmotik. Makanya, kita kalikan konsentrasi dengan faktor van't Hoff (i) yang nilainya 2.
          </p><br/>
          <p><strong>Rumus Ajaibnya</strong></p><br/>
          <p>
          Ada rumus khusus buat hitung tekanan osmotik, yaitu:
          </p><br/>
          <p>
          π = i x C x R x T
          </p><br/>
          <p>
            <ul>
            <li><b>π:</b> Tekanan osmotik (yang mau kita cari)</li>
            <li><b>i:</b> Faktor van't Hoff (dalam kasus ini, 2 karena NaCl jadi 2 ion)</li>
            <li><b>C:</b> Konsentrasi larutan (dalam mol/liter)</li>
            <li><b>R:</b> Konstanta gas ideal (nilai tetap)</li>
            <li><b>T:</b> Suhu (dalam Kelvin)</li>
            </ul>
          </p><br/>
          <p><strong>Yuk Kita Hitung!</strong></p><br/>
          <p>
          Kita udah tahu semua nilainya:
          </p>
          <p>
            <ul>
            <li>i = 2</li>
            <li>C = 1 mol/liter (karena kita larutkan 1 mol garam dalam 1 liter air)</li>
            <li>R = 0,0821 (konstanta gas ideal)</li>
            <li>T = 27°C = 300 K (ingat, suhu harus dalam Kelvin)</li>
            </ul>
          </p>
          <p>
          Tinggal kita masukin angka-angkanya ke rumus:
          </p><br/>
          <p>
          π = 2 x 1 x 0,0821 x 300
          </p>
          <p>
          π = 49,26 atm
          </p><br/>
          <p><strong>Jadi, kesimpulannya:</strong></p><br/>
          <p>
          Tekanan osmotik larutan garam kita itu sebesar 49,26 atmosfer. Angka ini cukup besar, ya! Artinya, partikel-partikel garam itu nabrak-nabrak dinding gelas dengan sangat kuat.
          </p><br/>
        </section>
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
        <img 
            src="https://th.bing.com/th/id/OIP.9L2W4Z1WYXozh4086qHSzwHaHa?rs=1&pid=ImgDetMain" 
            alt="Penurunan Titik Beku" 
            className="colligative-img" 
        /><br/>

        <h4>A. Reaksi Ionisasi Larutan Elektrolit</h4><br/>
        <p><b>1. Reaksi Ionisasi Elektrolit Kuat</b></p>
        <p>
        Reaksi ionisasi elektrolit kuat merupakan reaksi berkesudahan. Dalam larutan tidak ada lagi molekul elektrolit yang netral, semua telah diubah menjadi ion-ion. Larutan elektrolit kuat memiliki ciri-ciri sebagai berikut.
        </p><br/>
        <p>1. Larutan elektrolit kuat mempunyai daya hantar listrik yang baik atau kuat.</p>
        <p>2. Dalam larutan terionisasi sempurna (seluruhnya berubah menjadi ion-ion).</p>
        <p>3. Jumlah ion dalam larutan sangat banyak.</p>
        <p>4. Harga derajat ionisasi mendekati 1 (harga α = 1).</p><br/>
        <p>Berikut contoh penulisan reaksi ionisasi elektrolit kuat.</p>
        <br/>
        <p>Asam : HCl → H+ + Cl-</p>
        <br/>
        <p>Basa : Ba(OH)2 → Ba2+ + 2 OH</p>
        <br/>
        <p>Garam : Na2CO3 → 2 Na+ + CO3-</p>
        <br/>

        <p><b>2. Reaksi Ionisasi Elektrolit Lemah</b></p>
        <p>Reaksi ionisasi elektrolit lemah merupakan reaksi keseimbangan karena elektrolit hanya terionisasi sebagian, sehingga dalam larutan masih ada molekul-molekul elektrolit yang netral. </p>
        <br/>
        <p>Larutan elektrolit lemah memiliki ciri-ciri sebagai berikut.</p>
        <br/>
        <p>1. Larutan elektrolit lemah mempunyai daya hantar listrik lemah.</p>
        <p>2. Dalam larutan terionisasi sebagian (hanya sebagian kecil senyawa yang membentuk ion).</p> 
        <p>3. Jumlah ion dalam larutan sedikit.</p>
        <p>4. Harga derajat ionisasi kurang dari 1 (harga α kecil, yaitu 0 lebih kecil dari α lebih kecil dari 1).</p>
        <br/>
        <p>Berikut contoh penulisan reaksi ionisasi elektrolit lemah.</p>
        <br/>
        <p>Asam : CH3COOH ⇋ CH3COO + H+</p>
        <br/>
        <p>Basa : NH4OH ⇋ NH4+ + OH-</p>
        <br/>
        <p>(SFR)</p>
        <br/>

        <h4>B. Contoh Larutan Elektrolit:</h4>
        <ul>
          <li><b>Garam dapur (NaCl):</b> Ketika dilarutkan dalam air, NaCl akan terionisasi menjadi ion Na+ dan Cl-.</li>
          <li><b>Asam klorida (HCl):</b> HCl akan terionisasi menjadi ion H+ dan Cl-.</li>
          <li><b>Natrium hidroksida (NaOH):</b> NaOH akan terionisasi menjadi ion Na+ dan OH-.</li>
        </ul><br/>

        <p><b>1. Efek Ionisasi dalam Larutan Elektrolit</b></p>
        <img 
            src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1642494576/hs8v3kogcanvolvnpybk.jpg" 
            alt="Reaksi Ionisasi Elektrolit Kuat" 
            className="colligative-img" 
        /><br/>
        <ul>
          <li><b>Konduktivitas:</b> Larutan elektrolit dapat menghantarkan arus listrik karena adanya ion-ion bebas yang bergerak menuju elektroda bermuatan berlawanan.</li>
          <li><b>Sifat Koligatif:</b> Larutan elektrolit memiliki sifat koligatif yang lebih besar dibandingkan larutan non-elektrolit dengan konsentrasi yang sama. Sifat koligatif adalah sifat larutan yang tergantung pada jumlah partikel zat terlarut, bukan pada jenis zat terlarutnya. Contoh sifat koligatif adalah penurunan tekanan uap, kenaikan titik didih, penurunan titik beku, dan tekanan osmotik.</li>
          <li><b>Reaksi Kimia:</b> Ion-ion dalam larutan elektrolit dapat bereaksi dengan zat lain membentuk senyawa baru.</li>
          <li><b>Pengaruh pH:</b> Ion-ion H+ dan OH- yang dihasilkan dari ionisasi asam dan basa dapat mempengaruhi pH larutan.</li>
        </ul><br/>

        <p><b>2. Faktor yang Mempengaruhi Derajat Ionisasi</b></p>
        <img 
            src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1642494602/ewuvlitgvcsxwmbwoz5o.jpg" 
            alt="Reaksi Ionisasi Elektrolit Lemah" 
            className="colligative-img" 
        /><br/>
        <ul>
          <li><b>Sifat zat terlarut:</b> Zat elektrolit kuat akan terionisasi sempurna, sedangkan zat elektrolit lemah hanya terionisasi sebagian.</li>
          <li><b>Konsentrasi larutan:</b> Semakin encer larutan, semakin besar derajat ionisasinya.</li>
          <li><b>Suhu:</b> Kenaikan suhu umumnya akan meningkatkan derajat ionisasi.</li>
          <li><b>Adanya ion senama:</b> Adanya ion senama akan menghambat proses ionisasi.</li>
        </ul><br/>

        <p><b>3. Penerapan dalam Kehidupan Sehari-hari</b></p>
        <ul>
          <li><b>Baterai:</b> Larutan elektrolit digunakan sebagai penghantar ion dalam baterai.</li>
          <li><b>Elektrolisis:</b> Proses elektrolisis digunakan untuk melapisi logam, menghasilkan gas, dan memproduksi zat kimia.</li>
          <li><b>Pengolahan air:</b> Proses pengolahan air melibatkan penggunaan elektrolit untuk membunuh mikroorganisme.</li>
          <li><b>Medis:</b> Larutan elektrolit digunakan dalam cairan infus untuk mengganti cairan tubuh yang hilang.</li>
        </ul><br/>

        <section className="contoh-soal-ionisasi">
          <h3>Contoh soal efek ionisasi dalam larutan elektrolit</h3><br/>
          <p><strong>Soal:</strong> Hitunglah tekanan osmotik larutan NaCl 0,1 M pada suhu 27°C. Diketahui R = 0,082 L atm/mol K dan NaCl terionisasi sempurna.</p><br/>
          <p><strong>Kenapa harus dihitung?</strong></p><br/>
          <p>
          Mengerti tekanan osmotik itu penting banget, lho! Misalnya, dalam tubuh kita, tekanan osmotik membantu menjaga keseimbangan cairan. Di industri, tekanan osmotik juga digunakan dalam proses pengolahan air laut menjadi air tawar.
          </p><br/>
          <p><strong>Mari kita pecah-pecah soal ini:</strong></p><br/>
          <p><b>
          1. NaCl jadi Na+ dan Cl-:
          </b></p>
          <p>Saat kita larutkan garam dapur dalam air, dia akan pecah jadi ion Na+ (natrium) dan ion Cl- (klorida). Nah, jumlah ion ini yang akan mempengaruhi tekanan osmotik. Makanya kita kasih nilai i (faktor van't Hoff) = 2, artinya setiap molekul NaCl akan menghasilkan 2 partikel yang aktif bikin tekanan.</p>
          <p><b><br/>
          2. Rumus Ajaib:
          </b></p>
          <p>Untuk menghitung tekanan osmotik, kita pakai rumus ini:</p>
          <p>π = i x M x R x T</p>
          <p>
            <ul>
            <li><b>π:</b> Tekanan osmotik (yang mau kita cari)</li>
            <li><b>i:</b> Faktor van't Hoff (dalam kasus ini, 2 karena NaCl jadi 2 ion)</li>
            <li><b>C:</b> Konsentrasi larutan (dalam mol/liter)</li>
            <li><b>R:</b> Konstanta gas ideal (nilai tetap)</li>
            <li><b>T:</b> Suhu (dalam Kelvin)</li>
            </ul>
          </p><br/>
          <p><b>
          3. Masukin Angka:
          </b></p>
          <p>Kita udah tahu semua nilainya:</p>
          <p>
            <ul>
            <li>i = 2</li>
            <li>C = 1 mol/liter (artinya dalam 1 liter air, ada 0,1 mol NaCl)</li>
            <li>R = 0,082 (nilai tetap)</li>
            <li>T = 27°C = 300 K (ingat, suhu harus dalam Kelvin)</li>
            </ul>
          </p>
          <p>Kita masukin angka-angkanya ke rumus:</p>
          <p>π = 2 x 0,1 x 0,082 x 300</p>
          <p>π = 4,92 atm</p><br/>
          <p><strong>Jadi, kesimpulannya:</strong></p><br/>
          <p>
          Tekanan osmotik larutan garam kita itu sebesar 49,26 atmosfer. Angka ini cukup besar, ya! Artinya, partikel-partikel garam itu nabrak-nabrak dinding gelas dengan sangat kuat.
          </p><br/>
          <p><b>Bayangkan gelas itu seperti kolam renang kecil, dan partikel-partikel garamnya seperti anak-anak yang lagi berenang.</b> Semakin banyak anak-anak yang berenang dan nabrak-nabrak dinding kolam, semakin besar tekanan yang dirasakan dinding kolam itu.</p><br/>
        </section>
      </section>

      <section className="molalitas-vs-molaritas">
        <h3>6. Perbedaan Molalitas dan Molaritas</h3>
        <p>
          Molalitas (m) adalah jumlah mol zat terlarut per kilogram pelarut, sementara molaritas (M) adalah jumlah mol zat terlarut per liter larutan. 
          Molalitas lebih bergantung pada massa pelarut, sehingga tidak terpengaruh oleh perubahan suhu, sedangkan molaritas tergantung pada volume larutan, yang dapat berubah dengan suhu.
        </p>
        <img 
            src="https://www.zenius.net/blog/wp-content/uploads/2021/09/Desain-tanpa-judul-5.jpg" 
            alt="Molaritas dan Molalitas" 
            className="colligative-img" 
        /><br/>

        <h4>A. Perbedaan Rumus Molalitas dan Molaritas</h4>
        <ul>
          <li><b>Garam dapur (NaCl):</b> Ketika dilarutkan dalam air, NaCl akan terionisasi menjadi ion Na+ dan Cl-.</li>
          <li><b>Asam klorida (HCl):</b> HCl akan terionisasi menjadi ion H+ dan Cl-.</li>
          <li><b>Natrium hidroksida (NaOH):</b> NaOH akan terionisasi menjadi ion Na+ dan OH-.</li>
        </ul><br/>
        <p><b>
          1. Molalitas(m)
        </b></p>
        <p><b>Defenisi:</b> Jumlah mol zat terlarut dalam 1 kg pelarut.</p>
        <p><b>Rumus:</b></p>
        <RumusMolalitas /><br/>
        <p><b>Satuan:</b> mol/kg atau molal</p>
        <p><b>Ciri khas:</b> Tidak dipengaruhi oleh perubahan suhu dan tekanan karena berkaitan dengan massa, bukan volume.</p><br/>
      
        <p><b>
          2. Molaritas(M)
        </b></p>
        <p><b>Defenisi:</b> Jumlah mol zat terlarut dalam 1 liter larutan.</p>
        <p><b>Rumus:</b></p>
        <RumusMolaritas /><br/>
        <p><b>Satuan:</b> mol/L atau molar</p>
        <p><b>Ciri khas:</b> Dipengaruhi oleh perubahan suhu dan tekanan karena volume larutan dapat berubah akibat perubahan suhu dan tekanan.</p>
        <TabelMoliri /><br/>

        <h4>B. Kapan Menggunakan Masing-masing?</h4>
        <p><b>
          1. Molalitas:
        </b></p>
        <p> Lebih sering digunakan dalam sifat koligatif larutan (misalnya penurunan titik beku, kenaikan titik didih) karena tidak dipengaruhi oleh perubahan suhu dan tekanan.</p><br/>
        <p><b>Molalitas</b> fokus pada massa pelarut, sedangkan molaritas fokus pada volume larutan.</p><br/>
        <p><b>Molalitas</b> lebih stabil terhadap perubahan suhu dan tekanan.</p><br/>

        <p><b>
          2. Molaritas:
        </b></p>
        <p> Lebih sering digunakan dalam reaksi kimia dan stoikiometri karena berkaitan langsung dengan volume larutan yang terlibat dalam reaksi.</p><br/>
        <p><b>Molaritas</b> lebih mudah digunakan dalam perhitungan stoikiometri.</p><br/>

        <section className="contoh-soal-ionisasi">
          <h3>Contoh soal perbedaan Molalitas dan Molaritas</h3><br/>
          <p><strong>Soal:</strong> Misalnya kita punya larutan gula dengan 2 mol gula dilarutkan dalam 500 gram air. Berapa molalitas dan molaritas larutan tersebut?</p><br/>
          <p><strong>Molalitas (Manisnya Teh)</strong></p>
          <p>
          Molalitas itu kayak ukuran seberapa banyak gula yang kamu larutkan dalam air. Semakin banyak gula, semakin manis tehnya. Jadi, molalitas itu kayak ukuran "kemanisan" larutan.
          </p><br/>
          <p><strong>Cara hitungnya gampang banget:</strong></p>
          <ul>
            <li><b>Jumlah gula:</b> Kita punya 2 bungkus gula (2 mol).</li>
            <li><b>Jumlah air:</b> Kita punya 500 gram air, atau sama dengan 0,5 kg.</li>
          </ul><br/>
          <p><strong>Jadi, molalitasnya adalah:</strong></p>
          <p>
          <ul>
            <li>Molalitas = (Jumlah gula) / (Jumlah air dalam kg)</li>
            <li>Molalitas = 2 mol / 0,5 kg = 4 mol/kg</li>
          </ul>
          </p><br/>
          <p>Artinya, dalam setiap 1 kg air, ada 4 mol gula. Makin besar nilai molalitas, berarti larutannya makin manis.</p><br/>
          <p><strong>Molaritas (Berapa Banyak Gelas?)</strong></p>
          <p>
          Molaritas itu beda lagi. Kalau molalitas ngukur seberapa manis, molaritas lebih ke ngukur seberapa banyak larutan yang kita punya. Misalnya, kalau kamu mau bagi-bagi teh manis ke teman-teman, kamu perlu tahu ada berapa gelas teh yang bisa kamu buat.
          </p><br/>
          <p>Cara hitung molaritas butuh informasi tambahan, yaitu volume larutan. Sayangnya, dalam soal ini kita enggak tahu berapa volume teh manis yang kita buat. Jadi, kita enggak bisa hitung molaritasnya.</p><br/>
          <p><strong>Kapan Pakai Molalitas dan Kapan Pakai Molaritas?</strong></p>
          <p>
            <ul>
              <li><b>Molalitas:</b> Kalau kamu lagi belajar tentang sifat-sifat larutan, kayak misalnya titik beku atau titik didih, biasanya yang dipakai adalah molalitas. Soalnya, molalitas enggak peduli sama perubahan volume akibat suhu.</li>
              <li><b>Molaritas:</b> Kalau kamu lagi ngitung-ngitung reaksi kimia atau mau bikin larutan dengan konsentrasi tertentu, biasanya yang dipakai adalah molaritas. Soalnya, molaritas berhubungan langsung dengan volume larutan.</li>
            </ul>
          </p><br/>
          <p><strong>Jadi intinya:</strong></p>
          <p>
            <ul>
              <li><b>Molalitas:</b> Ngeluarin rasa manisnya larutan.</li>
              <li><b>Molaritas:</b> Ngeluarin jumlah larutan yang kita punya.</li>
            </ul>
          </p><br/>
          <p><strong>Jadi, kesimpulannya:</strong></p>
          <p>
          Dalam soal gula kita ini, kita cuma bisa hitung molalitasnya. Kita tahu pasti bahwa dalam setiap 1 kg air ada 4 mol gula. Tapi kita enggak bisa tahu berapa molaritasnya karena kita kurang informasi tentang volume total larutan.
          </p><br/>
        </section>
      </section>

      <section className="pengaruh-suhu">
        <h3>7. Pengaruh Suhu terhadap Sifat Koligatif</h3>
        <p>
          Suhu dapat mempengaruhi perubahan sifat koligatif, seperti titik didih dan titik beku. Sebagai contoh, peningkatan suhu menyebabkan peningkatan energi kinetik partikel dalam larutan, yang pada gilirannya dapat mengubah sifat koligatif larutan.
        </p><br/>
        <p>
          Pada suhu yang lebih tinggi, tekanan uap larutan juga akan meningkat, menyebabkan peningkatan titik didih. Sebaliknya, penurunan suhu menyebabkan penurunan titik beku larutan.
        </p><br/>
        <h4>A. Pendahuluan</h4>
        <p>
          Sifat koligatif larutan adalah sifat larutan yang bergantung pada jumlah partikel zat terlarut dalam larutan, bukan pada jenis zat terlarutnya. Beberapa contoh sifat koligatif adalah penurunan tekanan uap, kenaikan titik didih, penurunan titik beku, dan tekanan osmosis.
        </p>
        <p><b>Pertanyaan yang sering muncul adalah:</b> Bagaimana suhu mempengaruhi sifat-sifat ini?</p>

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