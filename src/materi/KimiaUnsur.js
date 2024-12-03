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
      correctAnswer: "Reduktor",
      explanation: "Reduktor adalah zat yang memberikan elektron pada zat lain, sehingga mengalami oksidasi dan menurunkan bilangan oksidasinya.",
    },
    {
      question: "Reaksi redoks dapat digunakan dalam proses pemurnian logam. Proses ini terjadi karena",
      options: ["Perpindahan elektron antara logam dan elektrolit", "Perubahan suhu yang sangat tinggi", "Pembentukan senyawa kompleks", "Reaksi endergonik"],
      correctAnswer: "Perpindahan elektron antara logam dan elektrolit",
      explanation: "Pada pemurnian logam, terjadi perpindahan elektron melalui reaksi redoks antara logam dan elektrolit.",
    },
    {
      question: "Pada reaksi redoks antara magnesium dan oksigen, apakah yang terjadi pada magnesium?",
      options: ["Magnesium mengalami reduksi", "Magnesium mengalami oksidasi", "Oksigen mengalami oksidasi", "Tidak ada perubahan"],
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
    <div className="kimia-unsur-container">
      <h2>Bab 3: Kimia Unsur</h2>
      <p className="intro-text">
        Kimia unsur adalah cabang kimia yang mempelajari sifat, keberadaan,
        reaksi, dan kegunaan unsur-unsur kimia dalam tabel periodik. Pembahasan
        mencakup unsur golongan utama, golongan transisi, hingga unsur langka.
      </p>

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
        </p>
      </section>

      <section className="material-section">
        <h3>B. Golongan dan Periode Unsur</h3>
        <p>
          Unsur-unsur kimia dalam tabel periodik dibagi dalam golongan dan
          periode. Golongan mengelompokkan unsur-unsur berdasarkan sifat-sifat
          kimia yang serupa, sedangkan periode mengelompokkan unsur berdasarkan
          nomor atomnya. Unsur golongan utama adalah unsur-unsur yang memiliki
          sifat kimia yang lebih stabil dan mudah bereaksi.
        </p>
      </section>

      <section className="material-section">
        <h3>C. Reaksi-reaksi dalam Kimia Unsur</h3>
        <p>
          Reaksi kimia dalam kimia unsur melibatkan perubahan dalam struktur
          atom dan pembentukan senyawa baru. Reaksi redoks adalah salah satu
          jenis reaksi yang terjadi pada unsur-unsur, di mana terjadi
          perpindahan elektron antara dua zat.
        </p>
      </section>

      <section className="material-section">
        <h3>D. Sifat Fisik dan Kimia Unsur</h3>
        <p>
          Setiap unsur memiliki sifat fisik dan kimia yang unik. Sifat fisik
          meliputi titik leleh, titik didih, dan kerapatan, sementara sifat kimia
          meliputi kecenderungan unsur untuk bereaksi dengan unsur lain.
        </p>
      </section>

      <section className="material-section">
        <h3>E. Kegunaan Unsur dalam Kehidupan Sehari-hari</h3>
        <p>
          Unsur-unsur kimia digunakan dalam berbagai bidang, termasuk
          industri, pertanian, dan teknologi. Contohnya, unsur karbon digunakan
          dalam bentuk grafit untuk pensil, sementara unsur logam seperti
          tembaga digunakan dalam kabel listrik.
        </p>
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

            <form className="quiz-form">
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
            </form>

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
                Sebelumnya
              </button>
              <button type="button" onClick={handleNextQuestion}>
                Selanjutnya
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
