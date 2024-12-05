import React, { useState } from "react";
import "./Makromolekul.css";

const Makromolekul = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [explanations, setExplanations] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);

  const questions = [
    {
      question: "Berikut ini yang merupakan pasangan polimer sintetik adalah..",
      options: ["PVC dan protein", "PVC dan nilon", "Karet dan amilum", "Poliester dan isoprena", "Isoprena dan polistirena"],
      correctAnswer: "PVC dan nilon",
      explanation: "PVC dan nilon adalah contoh polimer sintetik yang umum digunakan.",
    },
    {
      question: "Polimer berikut termasuk polimer termoplas, kecuali..",
      options: ["Darkon", "Paralon", "Poliester", "Bakelit", "Nilon"],
      correctAnswer: "Bakelit",
      explanation: "Bakelit adalah polimer termoset, bukan termoplas.",
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
    <div className="makromolekul-container">
      <header>
        <h2>Bab 6: Materi Makromolekul Secara Lengkap</h2>
      </header>

      <section>
        <p>
          Setiap hari kita pasti mengonsumsi nasi, daging, susu, dan makanan lainnya sebagai suatu kebutuhan bagi tubuh. Makanan yang kita konsumsi tersebut dikategorikan menjadi beberapa jenis, yaitu karbohidrat, protein, dan lemak. Ketiga jenis makanan tersebut tentunya memiliki peran yang berbeda-beda bagi tubuh kita.
        </p>
        <p>
          Semua jenis makanan yang kita konsumsi tersebut digolongkan ke dalam makromolekul atau molekul besar. Mari kita simak pembahasan mengenai makromolekul yang akan menjelaskan karbohidrat, protein, dan lemak dari berbagai tinjauan.
        </p>
      </section>

      <h3>1. Pengertian dan Rumus Umum Karbohidrat</h3>
      <p>
        Karbohidrat merupakan makromolekul yang terdiri dari atom karbon, hidrogen, dan oksigen dengan rumus umum C<sub>n</sub>(H<sub>2</sub>O)<sub>m</sub>. Karbohidrat disebut juga sebagai senyawa poli hidroksi aldehida atau polihidroksi keton dan turunannya.
      </p>

      <h4>Monosakarida</h4>
      <p>
        Monosakarida merupakan karbohidrat paling sederhana dan tidak bisa mengalami proses hidrolisis. Contoh monosakarida termasuk glukosa, fruktosa, dan galaktosa.
      </p>

      <h4>Oligosakarida</h4>
      <p>
        Oligosakarida merupakan karbohidrat yang tersusun dari dua atau lebih monosakarida. Contoh disakarida termasuk laktosa, maltosa, dan sukrosa.
      </p>

      <h4>Polisakarida</h4>
      <p>
        Polisakarida merupakan karbohidrat yang terdiri dari banyak monosakarida. Contoh polisakarida termasuk selulosa, amilum, dan glikogen.
      </p>

      <h3>2. Uji Karbohidrat</h3>
      <h4>Uji Molisch</h4>
      <p>Uji ini dilakukan dengan menambahkan larutan alfanaftol pada sampel yang diuji, kemudian ditambahkan asam sulfat pekat.</p>

      <h4>Uji Fehling</h4>
      <p>Uji ini dilakukan untuk mengetahui adanya gula pereduksi pada sampel.</p>

      <h4>Uji Iodin</h4>
      <p>Uji ini dilakukan untuk mengetahui jenis polisakarida pada sampel yang diuji.</p>

      <h3>3. Pengertian Protein</h3>
      <p>
        Protein merupakan polimer yang tersusun dari monomer berupa asam amino. Unsur penyusun utama dalam suatu protein terdiri dari karbon (C), hidrogen (H), oksigen (O), dan nitrogen (N).
      </p>

      <h4>Asam Amino</h4>
      <p>
        Asam amino merupakan monomer penyusun protein yang memiliki rumus umum. Asam amino memiliki sifat amfoter dan dapat membentuk ion zwitter.
      </p>

      <h3>4. Struktur dan Bentuk Protein</h3>
      <p>
        Terdapat 4 struktur protein, yaitu struktur primer, sekunder, tersier, dan kuartener.
      </p>

      <h3>5. Uji Protein</h3>
      <h4>Uji Biuret</h4>
      <p>Uji ini digunakan untuk mengidentifikasi keberadaan protein atau asam amino.</p>

      <h3>6. Pengertian dan Struktur Lemak</h3>
      <p>
        Lemak merupakan senyawa ester dari gliserol dengan asam-asam karboksilat. Lemak dibedakan menjadi lemak jenuh dan tidak jenuh.
      </p>

      <h4>Lemak Jenuh</h4>
      <p>
        Lemak jenuh adalah lemak yang tidak memiliki ikatan ganda dalam rantai karbonnya. Contoh lemak jenuh termasuk asam stearat dan asam palmitat.
      </p>

      <h4>Lemak Tidak Jenuh</h4>
      <p>
        Lemak tidak jenuh memiliki satu atau lebih ikatan ganda dalam rantai karbonnya. Contoh lemak tidak jenuh termasuk asam oleat dan asam linoleat.
      </p>

      <h3>7. Uji Lemak</h3>
      <h4>Uji Saponifikasi</h4>
      <p>Uji ini dilakukan untuk mengetahui keberadaan lemak dengan cara mereaksikan lemak dengan alkali.</p>

      <h4>Uji Sudan III</h4>
      <p>Uji ini digunakan untuk mendeteksi keberadaan lemak dalam sampel dengan menggunakan pewarna Sudan III.</p>
      
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
};

export default Makromolekul;