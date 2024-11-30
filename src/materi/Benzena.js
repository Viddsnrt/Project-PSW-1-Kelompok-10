import React, { useState } from "react";
import "./Benzena.css";

function Benzena() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [explanations, setExplanations] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);

  const questions = [
    {
      question: "Mana yang mengalami oksidasi pada reaksi Zn + Cu²⁺ → Zn²⁺ + Cu?",
      options: ["Zn", "Cu", "Cu²⁺", "Zn²⁺"],
      correctAnswer: "Zn",
      explanation: "Zn mengalami oksidasi karena kehilangan elektron dan berubah menjadi Zn²⁺.",
    },
    {
      question: "Pada elektrolisis air, gas apa yang dihasilkan di katoda?",
      options: ["Oksigen", "Hidrogen", "Nitrogen", "Karbon dioksida"],
      correctAnswer: "Hidrogen",
      explanation: "Gas hidrogen dihasilkan di katoda karena ion H⁺ mendapatkan elektron.",
    },
    {
      question: "Bilangan oksidasi oksigen dalam H₂O adalah?",
      options: ["+1", "-2", "0", "-1"],
      correctAnswer: "-2",
      explanation: "Oksigen dalam senyawa biasanya memiliki bilangan oksidasi -2 kecuali dalam senyawa peroksida atau fluorida.",
    },
    {
      question: "Reaksi antara seng dan asam klorida menghasilkan gas hidrogen. Reaksi tersebut adalah contoh dari reaksi redoks. Manakah yang mengalami reduksi dalam reaksi tersebut?",
      options: ["Seng (Zn)", "Ion hidrogen (H⁺)", "Klorida (Cl⁻)", "Gas hidrogen (H₂)"],
      correctAnswer: "Ion hidrogen (H⁺)",
      explanation: "Ion H⁺ menerima elektron dan berubah menjadi gas hidrogen (H₂), sehingga mengalami reduksi.",
    },
    {
      question: "Bilangan oksidasi unsur klor (Cl) dalam NaCl adalah...",
      options: ["-1", "0", "+1", "+2"],
      correctAnswer: "-1",
      explanation: "Dalam NaCl, klor (Cl) memiliki bilangan oksidasi -1, karena Cl menerima satu elektron dari Na.",
    },
    {
      question: "Pada reaksi redoks, suatu zat yang mengalami pengurangan bilangan oksidasinya disebut...",
      options: ["Oksidator", "Reduktor", "Katalisator", "Elektrolit"],
      correctAnswer : "Reduktor",
      explanation: "Reduktor adalah zat yang memberikan elektron pada zat lain, sehingga mengalami oksidasi dan menurunkan bilangan oksidasinya.",
    },
    {
      question : "Reaksi redoks dapat digunakan dalam proses pemurnian logam. Proses ini terjadi karena",
      options: ["Perpindahan elektron antara logam dan elektrolit", "Perubahan suhu yang sangat tinggi", "Pembentukan senyawa kompleks", "Reaksi endergonik"],
      correctAnswer: "Perpindahan elektron antara logam dan elektrolit",
      explanation: "Pada pemurnian logam, terjadi perpindahan elektron melalui reaksi redoks antara logam dan elektrolit.",
    },
    {
      question: "Pada reaksi redoks antara magnesium dan oksigen, apakah yang terjadi pada magnesium?",
      options : ["Magnesium mengalami reduksi", "Magnesium mengalami oksidasi", "Oksigen mengalami oksidasi", "Tidak ada perubahan"],
      correctAnswer: "Magnesium mengalami oksidasi",
      explanation: "Magnesium kehilangan elektron dan membentuk ion Mg²⁺, sehingga mengalami oksidasi."
    },
    {
      question: "Pada elektrolisis air, gas apa yang dihasilkan di katoda?",
      options: ["Oksigen", "Hidrogen", "Nitrogen", "Karbon dioksida"],
      correctAnswer: "Hidrogen",
      explanation: "Gas hidrogen dihasilkan di katoda karena ion H⁺ mendapatkan elektron.",
    },
    {
      question: "Bilangan oksidasi unsur klor (Cl) dalam NaCl adalah...",
      options: ["-1", "0", "+1", "+2"],
      correctAnswer: "-1",
      explanation: "Dalam NaCl, klor (Cl) memiliki bilangan oksidasi -1, karena Cl menerima satu elektron dari Na.",
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
      <section className="kuis-pilihan-ganda">
        <h3>Mini Quiz</h3>
        {!quizCompleted ? (
          <>
            <p>
              <strong>Soal {currentQuestionIndex + 1}:</strong>{" "}
              {questions[currentQuestionIndex].question}
            </p>

            <form className="quiz-form">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <div key={index} className="quiz-option">
                  <label>
                    <input
                      type="radio"
                      value={option}
                      checked={selectedOption === option}
                      onChange={() => handleOptionSelect(option)}
                      disabled={showExplanation}
                    />
                    {option}
                  </label>
                </div>
              ))}
            </form>

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
  );
}

export default Benzena;
