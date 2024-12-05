import React, { useState } from "react";
import "./SenyawaKarbon.css";

function SenyawaKarbon() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [explanations, setExplanations] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);

  const questions = [
    {
      question: "Senyawa karbon yang termasuk dalam golongan hidrokarbon jenuh adalah..",
      options: ["Metana", "Etilena", "Asetilena", "Benzena", "Butadiena"],
      correctAnswer: "Metana",
      explanation: "Metana (CH₄) adalah contoh hidrokarbon jenuh, yang berarti hanya memiliki ikatan tunggal antara atom karbon.",
    },
    {
      question: "Senyawa karbon yang memiliki gugus fungsi alkohol adalah..",
      options: ["Ethanol", "Aseton", "Asam asetat", "Metanal", "Butanal"],
      correctAnswer: "Ethanol",
      explanation: "Ethanol (C₂H₅OH) memiliki gugus fungsi -OH, yang membuatnya termasuk dalam golongan alkohol.",
    },
    {
      question: "Berikut ini yang merupakan senyawa karbon yang termasuk dalam golongan aldehida adalah..",
      options: ["Etanal", "Asam propionat", "Ethanol", "Glukosa", "Aseton"],
      correctAnswer: "Etanal",
      explanation: "Etanal (atau asetaldehida) adalah senyawa karbon yang memiliki gugus fungsi -CHO, yang merupakan ciri khas aldehida.",
    },
    {
      question: "Senyawa karbon yang mengandung gugus fungsi karboksil (-COOH) adalah..",
      options: ["Asam asetat", "Metanol", "Etena", "Benzena", "Glukosa"],
      correctAnswer: "Asam asetat",
      explanation: "Asam asetat (CH₃COOH) memiliki gugus karboksil (-COOH), yang memberikan sifat asam pada senyawa tersebut.",
    },
    {
      question: "Senyawa karbon berikut yang merupakan isomer struktural dari butana adalah..",
      options: ["Isobutana", "Metana", "Etana", "Asetilen", "Etilena"],
      correctAnswer: "Isobutana",
      explanation: "Isobutana adalah isomer struktural dari butana, yang berarti memiliki rumus molekul yang sama tetapi struktur atom yang berbeda.",
    },
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    const isCorrect = option === questions[currentQuestionIndex].correctAnswer;
    if (isCorrect) setScore((prevScore) => prevScore + 1);

    setExplanations((prevExplanations) => {
      const updated = [...prevExplanations];
      updated[currentQuestionIndex] = {
        correct: isCorrect,
        explanation: questions[currentQuestionIndex].explanation,
      };
      return updated;
    });
    setShowExplanation(true);
  };

  const getFeedbackClass = (isCorrect) => {
    return isCorrect ? "correct-feedback" : "incorrect-feedback";
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption("");
      setShowExplanation(false);
    } else {
      setQuizCompleted(true); 
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setSelectedOption("");
      setShowExplanation(false);
    }
  };
  
  return (
    <><div className="senyawa-karbon-container">
        <h2>Bab 4: Senyawa Karbon dan Turunan Alkana</h2>
      <p className="intro-text">
        Alkana (juga disebut dengan <em>parafin</em>) adalah senyawa kimia hidrokarbon jenuh asiklis. Alkana termasuk senyawa alifatik. Dengan kata lain, alkana adalah sebuah rantai karbon panjang dengan ikatan-ikatan tunggal. Rumus umum untuk alkana adalah C<sub>n</sub>H<sub>2n+2</sub>.
      </p>
      <p>Penggunaan alkana sudah dapat diketahui dengan baik oleh manusia. Penggunaan alkana biasanya dikelompokkan berdasarkan jumlah atom karbonnya.</p>
      <img
        src="https://i.pinimg.com/736x/33/32/8c/33328c9611df6b132fb62c5db72ecaa1.jpg"
        alt="Senyawa turunan Alkana" />
      <section>
        <h3>1. Alkohol</h3>
        <h4>A. Sifat-sifat Alkohol</h4>
        <ul>
          <li>Alkohol mempunyai ikatan hidrogen.</li>
          <li>Semakin besar massa molekul alkohol, titik didihnya semakin tinggi.</li>
          <li>Alkohol mudah larut dalam air.</li>
        </ul>
        <p>Dapat mengalami reaksi-reaksi berikut:</p>
        <ul>
          <li>Bereaksi dengan logam Na, menghasilkan natrium etanolat.</li>
          <div>
            <img
              src="https://soalkimia.com/wp-content/uploads/2020/01/alkohol-1.jpg"
              alt="Reaksi natrium etanolat" />
          </div>
          <li>Dapat diestifikasi dengan asam, menghasilkan ester.</li>
          <div>
            <img
              src="https://soalkimia.com/wp-content/uploads/2020/01/alkohol-2.jpg"
              alt="Ester dari Alkohol" />
          </div>
        </ul>
        <li>Dapat dioksidasi:</li>
        <ul>
          <li>Oksidasi alkohol primer menghasilkan aldehid dan asam karboksilat.</li>
          <li>Oksidasi alkohol sekunder menghasilkan keton.</li>
          <li>Mengalami reaksi dehidrasi (memanaskan alkohol dengan asam kuat menghasilkan alkena dan air).</li>
          <li>Bereaksi dengan hidrogen halida menghasilkan haloalkana dan air.</li>
        </ul>
        <h4>B. Pembuatan Alkohol</h4>
        <ul>
          <li>Hidrasi alkena dengan katalis asam menghasilkan etanol.</li>
          <li>Metanol dibuat dari gas alam (metana) dengan H<sub>2</sub>O dan gas H<sub>2</sub>.</li>
          <li>Fermentasi karbohidrat dengan bantuan ragi menghasilkan etanol.</li>
          <li>Mengalami pereaksi Grignard.</li>
        </ul>
        <h4>C. Kegunaan Alkohol</h4>
        <h4>1. Metanol</h4>
        <ul>
          <li>Pelarut</li>
          <li>Bahan baku pembuatan formaldehid (untuk membuat polimer)</li>
          <li>Campuran bahan bakar bensin</li>
          <li>Proses pembakaran: <code>2CH3OH + 3O2 → 2CO2 + 4H2O</code></li>
          <li>Sumber industri</li>
        </ul>
        <section>
          <h4>Etanol</h4>
          <ul>
            <li>Pembersih luka dan antiseptik</li>
            <li>Spirit (minuman keras) bermetil yang diproduksi dalam skala industri</li>
            <li>Bahan bakar: Gasohol (bensin dengan 10-20% etanol)</li>
            <li>Pelarut dalam parfum dan kosmetik</li>
          </ul>
          <h4>Contoh Etanol</h4>
          <h4>1. Etilen Glikol</h4>
          <ul>
            <li>Zat anti beku pada radiator</li>
            <li>Bahan bak u serat sintetis seperti daktron</li>
            <li>Bahan pelunak atau pelembut</li>
          </ul>
          <h4>2. Gliserol</h4>
          <ul>
            <li>Pelembab dan pelembut pada losion dan kosmetik</li>
            <li>Pelembut pada tembakau dan obat-obatan</li>
            <li>Bahan pembuat nitrogliserin (bahan peledak)</li>
          </ul>
          <h4>3. Propan-2-ol</h4>
          <ul>
            <li>Digunakan sebagai pelarut</li>
          </ul>
        </section>
        <section>
          <h3>2. Eter</h3>
          <h4>A. Sifat-sifat Eter</h4>
          <ul>
            <li>Cairan yang mudah menguap dan mudah terbakar.</li>
            <li>Titik didih rendah, lebih rendah daripada alkohol dengan massa molekul yang sama.</li>
            <li>Sedikit larut dalam air.</li>
            <li>Melarutkan senyawa-senyawa kovalen.</li>
            <li>Bersifat anestetik.</li>
            <li>Tidak reaktif, tidak dapat dioksidasi, direduksi, dieleminasi, atau direaksikan dengan basa, tetapi dapat disubstitusikan dengan asam kuat.</li>
          </ul>
          <h4>B. Pembuatan Eter</h4>
          <h4>1. Reaksi dengan Asam Sulfat dan Etanol</h4>
          <p>Reaksi ini menghasilkan dietil eter dan etil hidrogen sulfat sebagai zat antara.</p>
          <img
            src="https://soalkimia.com/wp-content/uploads/2020/01/eter-1.jpg"
            alt="Reaksi dengan Asam Sulfat dan Etanol" />
          <h4>2. Sintesis Williamson</h4>
          <p>Sintesis ini terjadi antara alkil halida dengan alkoksida.</p>
          <img
            src="https://soalkimia.com/wp-content/uploads/2020/01/eter-2.jpg"
            alt="Sintesis Williamson" />
          <h4>C. Kegunaan Eter</h4>
          <ul>
            <li>Digunakan sebagai pelarut dan obat anestesi</li>
            <li>Etil eter yang diberikan melalui pernapasan sebagai obat bius</li>
            <li>Contoh anestesi: kloroform dan siklopropana</li>
            <li>Metil-tersierbutil eter (MTBE) digunakan sebagai zat aditif pada bensin untuk menaikkan bilangan oktan bensin</li>
          </ul>
          <p>Perbedaan antara alkohol dan eter dapat dilihat melalui reaksi dengan logam natrium fosfor pentaklorida (PCl5).</p>
          <img
            src="https://soalkimia.com/wp-content/uploads/2020/01/eter-3.jpg"
            alt="Kegunaan Eter" />
        </section>
        <h3>3. Aldehid</h3>
        <h4>A. Sifat-Sifat Aldehid</h4>
        <ul>
          <li>Merupakan senyawa polar</li>
          <li>Mudah larut dalam air</li>
          <li>Melarutkan senyawa polar dan nonpolar</li>
          <li>Tidak mempunyai ikatan hidrogen</li>
          <li>Titik didihnya lebih tinggi dibandingkan dengan senyawa karbon yang massa relatifnya hampir sama</li>
        </ul>
        <h4>B. Reaksi-reaksi Aldehid</h4>
        <div>
          <ul>
            <li>Hidrogenasi
              <div>
                <img
                  src="https://soalkimia.com/wp-content/uploads/2020/01/Aldehid-1.jpg"
                  alt="Hidrogenasi Aldehid" />
              </div>
              <p>Aldehid dapat mengadisi hidrogen menjadi alkohol primer.</p>
            </li>
            <li>Adisi NaHSO3
              <div>
                <img
                  src="https://soalkimia.com/wp-content/uploads/2020/01/Aldehid-2.jpg"
                  alt="Adisi NaHSO3" />
              </div>
              <p>Adisi aldehid dengan natrium bisulfit menghasilkan senyawa padat dan sukar larut.</p>
            </li>
            <li>Adisi Hidrogen Sianida
              <div>
                <img
                  src="https://soalkimia.com/wp-content/uploads/2020/01/Aldehid-3.jpg"
                  alt="Adisi Hidrogen Sianida" />
              </div>
              <p>Adisi hidrogen sianida menghasilkan sianohidral.</p>
            </li>
            <li>Oksidasi pada Aldehid
              <p>Aldehid dapat dioksidasi dengan pereaksi Fehling dan Tollens, membentuk asam karboksilat.</p>
            </li>
            <li>Oksidasi dengan Pereaksi Fehling
              <p>Menghasilkan endapan merah bata. Larutan Fehling A merupakan larutan CuSO4, sedangkan Fehling B merupakan larutan kalium natrium tartat dalam NaOH.</p>
            </li>
            <li>Oksidasi dengan Pereaksi Tollens
              <p>Merupakan larutan AgNO3 dicampur dengan larutan amonia berlebih sehingga dalam larutan mengandung ion Ag[NH3]2+. Menghasilkan endapan perak yang menempel pada dinding tabung reaksi dan membentuk cermin. Endapan ini disebut dengan cermin perak.</p>
            </li>
          </ul>
        </div>
        <h3>C. Pembuatan Aldehid</h3>
        <div>
          <h4>1. Oksidasi Alkohol Primer</h4>
          <img
            src="https://soalkimia.com/wp-content/uploads/2020/01/Aldehid-4.jpg"
            alt="Oksidasi Alkohol Primer" />
          <p>Oksidasi alkohol primer menghasilkan aldehid.</p>
          <h4>2. Reduksi Asam Karboksilat</h4>
          <img
            src="https://soalkimia.com/wp-content/uploads/2020/01/Aldehid-5.jpg"
            alt="Reduksi Asam Karboksilat" />
          <p>Reduksi asam karboksilat juga menghasilkan aldehid.</p>
        </div>
        <h3>D. Kegunaan Aldehid</h3>
        <p>Aldehid yang banyak digunakan yaitu formaldehid. Formaldehid digunakan untuk membuat formalin. Formalin digunakan untuk pengawet mayat dan spesimen biologi, serta untuk pembuatan plastik tahan panas.</p>
      </section>
      <section>
        <h3>4. KETON</h3>
        <h4>A. Sifat - Sifat Keton</h4>
        <ul>
          <li>Merupakan senyawa polar</li>
          <li>Larut dalam air</li>
          <li>Tidak mempunyai ikatan hidrogen</li>
          <li>Titik didih keton lebih tinggi dibandingkan hidrokarbon lain dengan massa molekul relatif hampir sama.</li>
        </ul>
        <p>Mengalami reaksi berikut:</p>
        <ul>
          <li>Adisi hidrogen, menghasilkan alkohol.</li>
          <li>Adisi HCN, menghasilkan sianohidral.</li>
          <li>Halogenasi.</li>
        </ul>
        <h4>B. Pembuatan Keton</h4>
        <p>Dari oksidasi alkohol sekunder</p>
        <div>
          <h4>Oksidasi Alkohol Sekunder</h4>
          <img
            src="https://soalkimia.com/wp-content/uploads/2020/01/keton-1.jpg"
            alt="Oksidasi Alkohol Sekunder Image" />
          <p>Distilasi kering garam alkali atau alkali tanah karboksilat</p>
        </div>
        <h4>C. Kegunaan Keton</h4>
        <p>Paling banyak digunakan yaitu aseton atau propanon, digunakan sebagai pelarut senyawa-senyawa nonpolar.</p>
      </section>
      <section>
        <h3>5. Asam Karboksilat</h3>
        <h4>A. Sifat-sifat Asam Karboksilat</h4>
        <ul>
          <li>Merupakan senyawa polar.</li>
          <li>Senyawa dengan atom C<sub>1</sub> – C<sub>4</sub> mudah larut dalam air, semakin banyak cabang kelarutannya dalam air berkurang.</li>
          <li>Titik didih tinggi karena mempunyai ikatan hidrogen.</li>
        </ul>
        <p>Mengalami reaksi-reaksi berikut:</p>
        <ul>
          <li>Reaksi dengan logam, garam karbonat, dan basa alkali.</li>
          <li>Reaksi esterifikasi.</li>
        </ul>
        <img
          src="https://soalkimia.com/wp-content/uploads/2020/01/asam-karboksilat-1.jpg"
          alt="Reaksi Esterifikasi Asam Karboksilat" />
        <h4>B. Pembuatan Asam Karboksilat</h4>
        <ul>
          <li>Oksidasi alkohol primer.</li>
          <img
            src="https://soalkimia.com/wp-content/uploads/2020/01/asam-karboksilat-2.jpg"
            alt="Oksidasi Alkohol Primer" />
          <li>Hidrolisis senyawa alkana nitril pada suhu tinggi dan asam kuat.</li>
          <li>Hidrolisis gas asetilen dilanjutkan oksidasi di udara.</li>
          <li>Mereaksikan gas karbon monoksida dengan larutan NaOH pada tekanan tinggi.</li>
          <li>Oksidasi keton.</li>
          <img
            src="https://soalkimia.com/wp-content/uploads/2020/01/asam-karboksilat-3.jpg"
            alt="Oksidasi Keton" />
        </ul>
        <h3>C. Kegunaan Asam Karboksilat</h3>
        <p>Asam karboksilat yang banyak digunakan dalam kehidupan sehari-hari yaitu:</p>
        <ul>
          <li>Asam format, digunakan untuk penyamakan kulit, industri tekstil, dan pengumpulan lateks diperkebunan karet.</li>
          <li>Asam asetat, digunakan sebagai pelarut, dan sintesis hasil industri serat dan plastik.</li>
          <li>Asam oksalat, digunakan untuk penghilang karat dan pereaksi pada pembuatan zat warna.</li>
          <li>Asam tartat, digunakan untuk penyamakan, fotografi dan keramik.</li>
        </ul>
      </section>
      <section>
        <h3>6. Ester</h3>
        <h4>A. Sifat-sifat Ester</h4>
        <ul>
          <li>Mudah menguap.</li>
          <li>Sedikit larut dalam air.</li>
          <li>Semakin besar massa molekul relatifnya, semakin tinggi titik didihnya.</li>
        </ul>
        <p>Dapat mengalami reaksi-reaksi berikut:</p>
        <ul>
          <li>Reaksi hidrolisis, terbentuk reaksi kesetimbangan antara asam karboksilat dengan alkohol.</li>
          <li>Hidrolisis dengan basa, menghasilkan suatu garam dan alkohol.</li>
          <li>Reaksi dengan alkohol, menghasilkan ester lain dan alkohol lain.</li>
          <li>Dapat direduksi menghasilkan alkohol.</li>
          <li>Bereaksi dengan pereaksi Grignard menghasilkan alkohol.</li>
        </ul>
        <h4>B. Pembuatan Ester</h4>
        <p>Ester dibuat dari reaksi antara asam karboksilat dengan alkohol, reaksi ini disebut esterifikasi.</p>
        <img
          src="https://soalkimia.com/wp-content/uploads/2020/01/esterifikasi-1.jpg"
          alt="Pembuatan Ester" />
        <h4>C. Kegunaan Ester</h4>
        <p>Senyawa-senyawa ester banyak digunakan sebagai esens karena mempunyai aroma khas, antara lain:</p>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Ester</th>
              <th>Aroma</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Etil butirat</td>
              <td>Nanas</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Metil butirat</td>
              <td>Apel</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Etil format</td>
              <td>Rum</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Propil asetat</td>
              <td>Pir</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Isopentil asetat</td>
              <td>Pisang</td>
            </tr>
            <tr>
              <td>6</td>
              <td>N-oktil asetat</td>
              <td>Jeruk manis</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Metil salisilat</td>
              <td>Saesaparila</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h3>7. HaloAlkana</h3>
        <h4>A. Kloroform (CHCl<sub>3</sub>)</h4>
        <p>Kloroform diperoleh dengan mereaksikan etanol dengan Cl<sub>2</sub> dan KOH atau kapur klor. Cl<sub>2</sub> berfungsi untuk mengoksidasi etanol menjadi etanal. Etanal dengan Cl<sub>2</sub> membentuk trikloro etanal (kloral). Dalam basa, kloral diubah menjadi kalium metanoat dan kloroform.</p>
        <p>Kloroform bersifat anestesi sehingga dimanfaatkan dalam bidang kedokteran sebagai obat bius. Kloroform sebagai obat bius dinyatakan tidak aman karena mengganggu fungsi hati, sehingga diganti dengan senyawa 2-bromo-2-kloro-1,1,1-trifluoro etana atau disebut senyawa haloetana.</p>
        <img
          src="https://soalkimia.com/wp-content/uploads/2020/01/esterifikasi-2.jpg"
          alt="Rumus Struktur Kloroform" />
        <h4>B. Iodoform (CHI<sub>3</sub>)</h4>
        <p>Merupakan kristal padat berwarna kuning dan berbau khas, digunakan di bidang kedokteran sebagai antiseptik.</p>
        <h4>C. Karbon Tetraklorida (CCl<sub>4</sub>)</h4>
        <p>Merupakan zat cair yang tidak berwarna dan lebih berat dari air. Uap CCl<sub>4</sub> tidak mudah terbakar dan non eksplosif. Senyawa CCl<sub>4</sub> dibuat dengan mereaksikan kloroform (CHCl<sub>3</sub>) dengan Cl<sub>2</sub>.</p>
        <p>Dalam rumah tangga, CCl<sub>4</sub> digunakan untuk menghilangkan noda-noda minyak atau lemak pada pakaian, digunakan juga sebagai bahan pemadam kebakaran dan pelarut lemak, lilin, damar, dan protein.</p>
        <img
          src="https://soalkimia.com/wp-content/uploads/2020/01/esterifikasi-3.jpg"
          alt="Karbon Tetraklorida" />
        <h3>D. Freon (CCl<sub>2</sub>F<sub>2</sub>)</h3>
        <p>Freon merupakan senyawa halo alkana yang sangat stabil, tidak berbau, mudah menguap, tidak mudah terbakar, dan mempunyai toksisitas rendah. Kegunaan freon adalah sebagai berikut:</p>
        <ul>
          <li>Pelarut lemak, minyak, dan damar.</li>
          <li>Bahan pendingin pada freezer dan AC, karena mempunyai titik didih –30°C.</li>
          <li>Sebagai aerosol pada hair spray dan body spray.</li>
        </ul>
        <p>Penggunaan freon yang berlebihan dapat merusak lapisan ozon dikarenakan atom-atom klorin yang dibebaskan dari penguraian freon dapat bereaksi dengan ozon.</p>
        <h3>E. Fosgen (COCl<sub>2</sub>)</h3>
        <p>Fosgen merupakan gas tidak berwarna dan sangat beracun. Fosgen dibuat dengan mereaksikan gas klorin dengan CO dan dialirkan melalui arang tulang.</p>
        <img
          src="https://soalkimia.com/wp-content/uploads/2020/01/esterifikasi-4.jpg"
          alt="Fosgen" />
        <p>Reaksi antara gas fosgen dengan etanol menghasilkan ester dietil karbonat, sementara reaksi gas fosgen dengan amonia menghasilkan urea yang banyak digunakan sebagai pupuk.</p>
        <img
          src="https://soalkimia.com/wp-content/uploads/2020/ 01/esterifikasi-5.jpg"
          alt="Fosgen2" />
      </section>
      <section className="Contoh-soal-Senyawa">
        <h3>Contoh Soal Senyawa Karbon Turunan Alkana</h3><br />
        <h4>1. Berikut rumus molekul dari aldehid (alkanal) yang benar adalah…</h4>
        <p>a. CnH<sub>2</sub>O</p>
        <p>b. CnH<sub>2</sub>nO<sub>2</sub></p>
        <p>c. CnHnO<sub>2</sub></p>
        <p>d. CnH<sub>2</sub>nO<sub>2</sub>n</p>
        <p>e. CnH<sub>2</sub>nO</p>
        <h4>Jawaban : D</h4>
        <p><strong>Pembahasan :</strong> Karena jumlah atom hidrogen dalam aldehid adalah dua kali jumlah atom karbonnya, salah satu atom karbon dalam aldehid mempunyai ikatan ganda dengan oksigen.</p>
        <br />
        <h4>2. Nama senyawa dibawah yang benar adalah…</h4> <br />
        <img
          src="https://soalkimia.com/wp-content/uploads/2017/05/soal-senyawa-karbon-kelas-12.jpg"
          alt="Soal2" />
        <p>a. 4-metil 2-kloro pentana</p>
        <p>b. 3-metil 2-kloro pentana </p>
        <p>c. 2,4-dikloro pentana</p>
        <p>d. 1,4-dikloro 2-metil pentana</p>
        <p>e. 1,3-dikloro pentana</p>
        <h4>Jawaban : D </h4>
        <p><strong>Pembahasan : </strong></p>
        <p><i>Langkah-langkah menentukan nama senyawa :</i></p>
        <ul>
          <li>Mengidentifikasi gugus fungsi.</li>
          <li>Memilih rantai induk, yaitu rantai terpanjang yang mengandung gugus fungsi.</li>
          <li>Menuliskan nomor, dimulai dari salah satu ujung dari nomor terkecil.</li>
          <li>Menuliskan nama berdasarkan abjad, dimulai dengan nama cabang, kemudian rantai induk.</li>
          <li>Apabila ada cabang – cabang sejenis digabung dan dinyatakan dengan awalan di, tri, terta, dan seterusnya.</li>
        </ul>
        <img
          src="https://soalkimia.com/wp-content/uploads/2017/05/soal-senyawa-karbon-kelas-12-no-2.jpg"
          alt="Kunci2" />
      </section>

      <section className="kuis-pilihan-ganda">
          <h3>Mini Quiz</h3>
          {!quizCompleted ? (
            <>
            <p>
             <strong>Soal {currentQuestionIndex + 1}:</strong>{" "}
             {questions[currentQuestionIndex].question}
            </p>
            <div className="quiz-form">
             {questions[currentQuestionIndex].options.map((option, index) => (
              <div key={index} className="quiz-option">
              <label>
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionSelect(option)}
                  disabled={showExplanation} />
                {option}
              </label>
            </div>
          ))}
        </div>

        {showExplanation && (
          <div
            className={`quiz-feedback ${getFeedbackClass(
              explanations[currentQuestionIndex].correct
            )}`}
          >
            <p>
              {explanations[currentQuestionIndex].correct
                ? "Jawaban Anda benar!"
                : "Jawaban Anda salah."}
            </p>
            <p>{explanations[currentQuestionIndex].explanation}</p>
          </div>
        )}

        <div className="quiz-buttons">
          <div className="navigation-buttons">
            <button
              type="button"
              className="quiz-button"
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button
              type="button"
              className="quiz-button"
              onClick={handleNextQuestion}
              disabled={!selectedOption}
            >
              {currentQuestionIndex === questions.length - 1 ? "Lihat Skor" : "Next"}
            </button>
          </div>
        </div>
      </>
    ) : (
      <div className="quiz-completion">
        <p>Quiz Selesai!</p>
        <p>
          Skor Anda: {score} dari {questions.length}
        </p>
      </div>
    )}
  </section>
      </div>
</>

  );
}


export default SenyawaKarbon;
