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

export default KimiaUnsur;
