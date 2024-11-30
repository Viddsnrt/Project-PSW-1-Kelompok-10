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

export default SenyawaKarbon;
