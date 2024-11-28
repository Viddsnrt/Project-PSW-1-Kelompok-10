import React, { useState } from "react";
import "./ReaksiRedoks.css";

function ReaksiRedoks() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);

  const questions = [
    {
      question: "Mana yang mengalami oksidasi pada reaksi Zn + Cu²⁺ → Zn²⁺ + Cu?",
      options: ["Zn", "Cu", "Cu²⁺", "Zn²⁺"],
      correctAnswer: "Zn",
    },
    {
      question: "Pada elektrolisis air, gas apa yang dihasilkan di katoda?",
      options: ["Oksigen", "Hidrogen", "Nitrogen", "Karbon dioksida"],
      correctAnswer: "Hidrogen",
    },
    {
      question: "Bilangan oksidasi oksigen dalam H₂O adalah?",
      options: ["+1", "-2", "0", "-1"],
      correctAnswer: "-2",
    },
  ];

  const handleQuizSubmit = (event) => {
    event.preventDefault();

    if (isAnswered) return; // Mencegah jawaban ganda pada pertanyaan yang sama.

    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setFeedback("Jawaban Anda benar!");
    } else {
      setFeedback("Jawaban Anda salah.");
    }

    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption("");
    setFeedback("");
    setIsAnswered(false);
  };

  return (
    <div className="reaksi-redoks-container">
      <h2>Bab 2: Reaksi Redoks dan Elektrokimia</h2>

      <section className="pengertian-redoks">
        <h3>Pengenalan Reaksi Redoks</h3>
        <p>
          Reaksi redoks (reduksi-oksidasi) adalah reaksi kimia yang melibatkan perpindahan elektron dari satu zat ke zat lain. 
          Dalam reaksi redoks, terdapat dua proses utama:
        </p>
        <ul>
          <li><strong>Oksidasi:</strong> Proses kehilangan elektron.</li>
          <li><strong>Reduksi:</strong> Proses penambahan elektron.</li>
        </ul>
        <p>
          Zat yang mengalami oksidasi disebut agen pereduksi, sedangkan zat yang mengalami reduksi disebut agen pengoksidasi.
        </p>
        <img 
          src="https://fatek.umsu.ac.id/wp-content/uploads/2023/08/reaksi-redoks-pengertian-fungsi-ciri-dan-contoh.png" 
          alt="Diagram Reaksi Redoks" 
          className="redox-img" 
        />
      </section>

      <section className="konsep-elektrokimia">
        <h3>Konsep Elektrokimia</h3>
        <p>
          Elektrokimia adalah cabang ilmu kimia yang mempelajari hubungan antara reaksi kimia dan listrik. 
          Sel elektrokimia adalah perangkat yang dapat menghasilkan listrik dari reaksi kimia atau menggunakan listrik untuk menyebabkan reaksi kimia.
        </p>
        <p>Sel elektrokimia terdiri dari dua jenis utama:</p>
        <ul>
          <li><strong>Sel Galvani (Volta):</strong> Menghasilkan listrik dari reaksi redoks spontan.</li>
          <li><strong>Sel Elektrolisis:</strong> Menggunakan listrik untuk mendorong reaksi redoks non-spontan.</li>
        </ul>
      </section>

      <section>
        <h4>1. Sel Galvani (Sel Volta)</h4>
        <p>
          Sel galvani mengubah energi kimia menjadi energi listrik. Contoh umum dari sel galvani adalah baterai. 
          Pada sel galvani, reaksi redoks spontan terjadi antara dua elektroda, yaitu anoda dan katoda:
        </p>
        <ul>
          <li><strong>Anoda:</strong> Elektroda di mana terjadi oksidasi.</li>
          <li><strong>Katoda:</strong> Elektroda di mana terjadi reduksi.</li>
        </ul>
        <p><em>Contoh reaksi:</em> Pada sel seng-tembaga, seng teroksidasi dan tembaga tereduksi.</p>
        <p>
          Zn(s) → Zn²⁺(aq) + 2e⁻ (oksidasi di anoda) <br />
          Cu²⁺(aq) + 2e⁻ → Cu(s) (reduksi di katoda)
        </p>
      </section>

      <section>
        <h4>2. Sel Elektrolisis</h4>
        <p>
          Sel elektrolisis menggunakan arus listrik untuk memicu reaksi kimia non-spontan. 
          Salah satu contoh penerapan elektrolisis adalah pemurnian logam dan produksi gas seperti hidrogen dan oksigen dari air.
        </p>
        <p>
          <em>Contoh reaksi:</em> Elektrolisis air menghasilkan gas hidrogen dan oksigen.
        </p>
        <p>
        2H₂O(l) → 2H₂(g) + O₂(g)
        </p>
      </section>

      <section className="bilangan-oksidasi">
        <h3>Aturan Penentuan Bilangan Oksidasi</h3>
        <p>Bilangan oksidasi (biloks) digunakan untuk menentukan unsur yang teroksidasi dan tereduksi.</p>
        <ul>
          <li>Unsur bebas (unsur murni) memiliki biloks 0.</li>
          <li>Ion monoatomik memiliki biloks sesuai muatannya.</li>
          <li>Biloks oksigen dalam senyawa biasanya -2, kecuali pada peroksida (-1) dan senyawa dengan fluor.</li>
          <li>Biloks hidrogen dalam senyawa biasanya +1, kecuali dalam hidrida logam (-1).</li>
          <li>Jumlah biloks dalam senyawa netral adalah 0, dan pada ion sama dengan muatannya.</li>
        </ul>
      </section>

      <section className="reaksi-redoks">
        <h3>Jenis Reaksi Redoks : </h3>
        <p>Reaksi redoks memiliki beberapa jenis yaitu : </p>
        <h4>Berdasarkan Jenis Reaksi</h4>
        <ul>
          <li>Reaksi Kombinasi : Dua atau lebih zat bergabung membentuk satu senyawa baru.</li>
          <li>Reaksi Penguraian : Satu senyawa diuraikan menjadi dua atau lebih zat.</li>
          <li>Reaksi Disproporsionasi : Satu unsur dalam suatu senyawa mengalami oksidasi dan reduksi sekaligus.</li>
          <li>Reaksi Pemindahan Elektron : Elektron berpindah dari reduktor ke oksidator.</li>
        </ul>
        <h4>Berdasarkan Medium Reaksi</h4>
        <ul>
          <li> Medium Asam </li>
          <li> Medium Basa </li>
        </ul>
      </section>

      <section className='langkah'>
        <h3>Langkah Menyetarakan Reaksi Redoks</h3>
        <h4>Metode Bilangan Oksidasi</h4>
        <p> Berikut adalah langkah-langkah untuk menyetarakan rekasi redoks menggunakan metode bilangan oksidasi:</p>
        <ul>
          <li>Tentukan biloks semua unsur</li>
          <li>Identifikasi zat yang mengalami oksidasi dan reduksi</li>
          <li>Setarakan jumlah elektron yang dilepas dan diterima</li>
          <li>Lengkapi reaksi dengan ion-ion atau molekul lain yang diperlukan</li>
        </ul>
        <h4>Metode Setengah Reaksi</h4>
        <p>Berikut adalah langkah-langkah untuk menyetarakan rekasi redoks menggunakan metode setengah reaksi:</p>
        <ul>
          <li>Pisahkan reaksi menjadi setengah reaksi oksidasi dan reduksi</li>
          <li>Setarakan atom-atom selain H dan O</li>
          <li>Setarakan O dengan menambahkan H20 dan H dengan H (di medium asam)</li>
          <li>Setarakan muatan dengan menambahkan elektron</li>
          <li>Gabungkan kedua setengah reaksi</li>
        </ul>
      </section>

      <section className="contoh-soal">
        <h3>Contoh Soal</h3>
        <p><strong>Soal:</strong> Pada reaksi redoks berikut, mana yang mengalami oksidasi?</p>
        <p><em>Reaksi:</em> Zn + Cu²⁺ → Zn²⁺ + Cu</p>
        <p><strong>Jawaban:</strong> Zn teroksidasi menjadi Zn²⁺.</p>
      </section>

      <section className="kuis-pilihan-ganda">
        <h3>Mini Quiz</h3>
        <p>
          <strong>Soal {currentQuestionIndex + 1}:</strong> {questions[currentQuestionIndex].question}
        </p>

        <form onSubmit={handleQuizSubmit} className="quiz-form">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <div key={index} className="quiz-option">
              <label>
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  disabled={isAnswered}
                />
                {String.fromCharCode(97 + index)}. {option}
              </label>
            </div>
          ))}

          {!isAnswered ? (
            <button type="submit" className="quiz-button">
              Submit
            </button>
          ) : (
            currentQuestionIndex < questions.length - 1 && (
              <button
                type="button"
                className="quiz-button"
                onClick={handleNextQuestion}
              >
                Next Question
              </button>
            )
          )}
        </form>

        {feedback && <p className="quiz-feedback">{feedback}</p>}
      </section>
    </div>
  );
}

export default ReaksiRedoks;
