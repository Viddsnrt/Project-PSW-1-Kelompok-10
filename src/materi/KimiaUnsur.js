import React, { useState } from "react"; 
import "./KimiaUnsur.css";

function KimiaUnsur() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [explanations, setExplanations] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);

  const questions = [
    {
      question: "Unsur yang termasuk dalam golongan halogen adalah..",
      options: ["Klorin", "Oksigen", "Sodium", "Kalsium", "Nitrogen"],
      correctAnswer: "Klorin",
      explanation: "Klorin merupakan unsur yang termasuk dalam golongan halogen (golongan VIIA) dalam tabel periodik.",
    },
    {
      question: "Unsur yang memiliki sifat non-logam dan mudah membentuk ikatan kovalen adalah..",
      options: ["Silikon", "Karbon", "Natrium", "Kalsium", "Magnesium"],
      correctAnswer: "Karbon",
      explanation: "Karbon adalah unsur non-logam yang mudah membentuk ikatan kovalen dengan unsur lainnya, seperti pada senyawa organik.",
    },
    {
      question: "Berikut ini yang merupakan unsur logam transisi adalah..",
      options: ["Besin (Fe)", "Natrium (Na)", "Klorin (Cl)", "Kalium (K)", "Helium (He)"],
      correctAnswer: "Besin (Fe)",
      explanation: "Besin (Fe) adalah salah satu unsur logam transisi yang terletak di blok d tabel periodik.",
    },
    {
      question: "Unsur dengan konfigurasi elektron [Kr] 5s² 4d¹⁰ 5p² adalah..",
      options: ["Stronsium", "Zirkonium", "Selenium", "Germanium", "Arsenik"],
      correctAnswer: "Germanium",
      explanation: "Germanium memiliki konfigurasi elektron [Kr] 5s² 4d¹⁰ 5p², yang menunjukkan bahwa ia berada di golongan IV.",
    },
    {
      question: "Unsur yang memiliki 7 elektron valensi dan termasuk golongan VIIA adalah..",
      options: ["Fluorin", "Klorin", "Bromin", "Iodin", "Semua benar"],
      correctAnswer: "Semua benar",
      explanation: "Fluorin, klorin, bromin, dan iodin semuanya adalah unsur golongan VIIA (halogen) yang memiliki 7 elektron valensi.",
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
    <div className="kimia-unsur-container">
      <h2>Bab 3: Kimia Unsur</h2>
      <p className="intro-text">
        Kimia unsur adalah cabang kimia yang mempelajari sifat, keberadaan,
        reaksi, dan kegunaan unsur-unsur kimia dalam tabel periodik. Pembahasan
        mencakup unsur golongan utama, golongan transisi, hingga unsur langka.
      </p><br/>

      <img 
            src="https://cdn.slidesharecdn.com/ss_thumbnails/kimiaunsur-141130181218-conversion-gate02-thumbnail-4.jpg?cb=1417371221" 
            alt="Molaritas dan Molalitas" 
            className="colligative-img" 
        /><br/>

      {/* Sections with content */}
      <section className="material-section">
        <h3>A. Pengertian Kimia Unsur</h3>
        <p>
          Kimia unsur adalah cabang ilmu kimia yang mempelajari unsur-unsur
          kimia yang terdapat dalam tabel periodik. Unsur-unsur tersebut
          dibedakan berdasarkan golongan dan periode yang ada di tabel
          periodik. Dalam kimia unsur, kita mempelajari sifat fisik dan kimia,
          reaksi kimia, serta kegunaan unsur-unsur tersebut dalam kehidupan
          sehari-hari.
        </p><br/>
      </section>

      <section className="material-section">
        <h3>B. Tabel Periodik Unsur</h3>
        <ul>
          <li><b>Struktur Tabel Periodik:</b> Tabel periodik merupakan alat yang sangat berguna untuk mengorganisasi dan memahami sifat-sifat unsur. Unsur-unsur disusun berdasarkan nomor atom yang meningkat, dan sifat-sifatnya menunjukkan tren periodik.</li>
          <li><b>Golongan:</b> Kolom vertikal dalam tabel periodik disebut golongan. Unsur-unsur dalam satu golongan memiliki konfigurasi elektron valensi yang serupa, sehingga memiliki sifat kimia yang mirip. Contohnya, golongan alkali (Li, Na, K) sangat reaktif dengan air.</li>
          <li><b>Periode:</b> Baris horizontal dalam tabel periodik disebut periode. Semakin ke bawah suatu periode, jari-jari atom semakin besar dan energi ionisasi semakin kecil.</li>
          <li><b>Blok Unsur:</b> Tabel periodik dibagi menjadi beberapa blok berdasarkan subkulit yang terisi terakhir dalam konfigurasi elektron. Blok s, p, d, dan f masing-masing memiliki karakteristik yang berbeda.</li>
        </ul><br/>
        <img 
            src="https://th.bing.com/th/id/OIP.P5MJZJ58qAWKisFWzbH5wwHaEK?rs=1&pid=ImgDetMain" 
            alt="Molaritas dan Molalitas" 
            className="colligative-img" 
        /><br/>
      </section>

      <section className="material-section">
        <h3>C. Golongan dan Periode Unsur</h3>
        <p>
          Unsur-unsur kimia dalam tabel periodik dibagi dalam golongan dan
          periode. Golongan mengelompokkan unsur-unsur berdasarkan sifat-sifat
          kimia yang serupa, sedangkan periode mengelompokkan unsur berdasarkan
          nomor atomnya. Unsur golongan utama adalah unsur-unsur yang memiliki
          sifat kimia yang lebih stabil dan mudah bereaksi.
        </p><br/>
        <img 
            src="https://3.bp.blogspot.com/-_nsnSVMK1bQ/Wizcf4GYwaI/AAAAAAAAAWg/aYHIhe4UoD8N_o5v9hmRoWVEjzQoC9WgwCLcBGAs/s1600/Golongan%2Bdan%2BPeriode.jpg" 
            alt="Molaritas dan Molalitas" 
            className="colligative-img" 
        /><br/>
      </section>

      <section className="material-section">
        <h3>D. Reaksi-reaksi dalam Kimia Unsur</h3>
        <p>
          Reaksi kimia dalam kimia unsur melibatkan perubahan dalam struktur
          atom dan pembentukan senyawa baru. Reaksi redoks adalah salah satu
          jenis reaksi yang terjadi pada unsur-unsur, di mana terjadi
          perpindahan elektron antara dua zat.
        </p><br/>
        <ul>
          <li><b>Reaksi Redoks:</b> Reaksi redoks adalah reaksi yang melibatkan perpindahan elektron. Oksidasi adalah proses kehilangan elektron, sedangkan reduksi adalah proses penerimaan elektron.</li>
          <li><b>Reaksi Pengendapan:</b> Reaksi pengendapan terjadi ketika dua larutan ionik bercampur dan membentuk endapan yang tidak larut.</li>
          <li><b>Reaksi Asam-Basa:</b> Reaksi asam-basa melibatkan transfer ion hidrogen (H⁺) antara asam dan basa.</li>
          <li><b>eaksi Penggantian Tunggal:</b>R Reaksi penggantian tunggal terjadi ketika suatu unsur bebas menggantikan unsur lain dalam suatu senyawa.</li>
          <li><b>Reaksi Penggantian Ganda:</b> Reaksi penggantian ganda melibatkan pertukaran kation dan anion antara dua senyawa ionik.</li>
        </ul>
        <br/>
      </section>

      <section className="material-section">
        <h3>E. Sifat Fisik dan Kimia Unsur</h3>
        <p>
          Setiap unsur memiliki sifat fisik dan kimia yang unik. Sifat fisik
          meliputi titik leleh, titik didih, dan kerapatan, sementara sifat kimia
          meliputi kecenderungan unsur untuk bereaksi dengan unsur lain.
        </p><br/>
        <ul>
          <li><b>Sifat Fisik:</b> Selain titik leleh, titik didih, dan kerapatan, sifat fisik lainnya yang penting adalah konduktivitas listrik, konduktivitas termal, kelarutan, dan kekerasan.</li>
          <li><b>Sifat Kimia:</b> Sifat kimia menggambarkan bagaimana suatu unsur berinteraksi dengan unsur lain. Contohnya, elektronegativitas, energi ionisasi, afinitas elektron, dan ukuran atom.</li>
        </ul><br/>
      </section>

      <section className="material-section">
        <h3>F. Kegunaan Unsur dalam Kehidupan Sehari-hari</h3>
        <p>
          Unsur-unsur kimia digunakan dalam berbagai bidang, termasuk
          industri, pertanian, dan teknologi. Contohnya, unsur karbon digunakan
          dalam bentuk grafit untuk pensil, sementara unsur logam seperti
          tembaga digunakan dalam kabel listrik.
        </p><br/>
        <ul>
          <li><b>Industri:</b> Unsur-unsur seperti besi, aluminium, dan tembaga digunakan dalam produksi berbagai macam barang, mulai dari bangunan hingga peralatan elektronik.</li>
          <li><b>Pertanian:</b> Unsur-unsur seperti nitrogen, fosfor, dan kalium sangat penting untuk pertumbuhan tanaman.</li>
          <li><b>Teknologi:</b> Unsur-unsur langka seperti silikon digunakan dalam pembuatan semikonduktor, sedangkan unsur-unsur radioaktif digunakan dalam bidang medis dan energi nuklir.</li>
          <li><b>Kedokteran:</b> Banyak unsur memiliki peran penting dalam tubuh manusia, seperti kalsium untuk tulang dan besi untuk hemoglobin.</li>
        </ul>
        <br/>
      </section>

      <section className="material-section">
        <h3>G. Unsur-unsur Khusus</h3>
        <ul>
          <li><b>Unsur Golongan Utama:</b> Unsur-unsur golongan utama memiliki sifat yang bervariasi, mulai dari logam alkali yang sangat reaktif hingga gas mulia yang sangat stabil.</li>
          <li><b>Unsur Transisi:</b> Unsur transisi memiliki sifat-sifat yang kompleks dan sering digunakan sebagai katalis dalam berbagai reaksi kimia.</li>
          <li><b>Unsur Lantanida dan Aktinida:</b> Unsur-unsur ini memiliki konfigurasi elektron yang unik dan banyak digunakan dalam teknologi nuklir.</li>
        </ul>
        <br/>
      </section>

      <section className="material-section">
        <h3>H. Kimia Nuklir</h3>
        <ul>
          <li><b>Radioaktivitas:</b> Beberapa unsur bersifat radioaktif, yaitu memancarkan radiasi. Radiasi ini dapat digunakan dalam berbagai bidang, seperti kedokteran dan energi nuklir. </li>
          <li><b>Fisi Nuklir:</b> Proses pembelahan inti atom menjadi inti yang lebih kecil.</li>
          <li><b>Fusi Nuklir:</b> Proses penggabungan dua inti atom menjadi satu inti yang lebih besar.</li>
        </ul>
        <br/>
        <img 
            src="https://image2.slideserve.com/5179450/slide1-l.jpg" 
            alt="Molaritas dan Molalitas" 
            className="colligative-img" 
        /><br/>
      </section>

      <section className="material-section">
        <h3>I. Aplikasi Kimia Unsur dalam Kehidupan Modern</h3>
        <ul>
          <li><b>Material Baru:</b> Kimia unsur berperan penting dalam pengembangan material baru dengan sifat yang unik, seperti superkonduktor dan nanomaterial.</li>
          <li><b>Energi:</b> Unsur-unsur seperti hidrogen dan uranium digunakan dalam pengembangan sumber energi alternatif.</li>
          <li><b>Lingkungan:</b> Kimia unsur membantu kita memahami proses-proses alami di lingkungan dan mengatasi masalah pencemaran.</li>
        </ul>
        <br/>
      </section>

      {/* Mini Quiz */}
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
                  <input
                    type="radio"
                    id={option}
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionSelect(option)}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>

            {showExplanation && (
              <div
                className={`explanation ${getFeedbackClass(
                  explanations[currentQuestionIndex]?.correct
                )}`}
              >
                <p>{explanations[currentQuestionIndex]?.explanation}</p>
              </div>
            )}

            <div className="quiz-navigation">
              <button
                type="button"
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </button>
              <button type="button" onClick={handleNextQuestion}>
                Next
              </button>
            </div>
          </>
        ) : (
          <div className="quiz-summary">
            <h4>Quiz Selesai!</h4>
            <p>Skor Anda: {score} dari {questions.length}</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default KimiaUnsur;
