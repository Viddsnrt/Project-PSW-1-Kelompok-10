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
    {
      question: "Berikut ini yang termasuk dalam contoh polimer alami adalah..",
      options: ["Nilon", "Polietilen", "Starch (amilum)", "Polipropilena", "PVC"],
      correctAnswer: "Starch (amilum)",
      explanation: "Starch (amilum) adalah contoh polimer alami yang terdiri dari banyak unit glukosa yang terikat dalam rantai panjang.",
    },
    {
      question: "Polimer yang digunakan sebagai bahan pembuat plastik keras dan digunakan dalam pipa air adalah..",
      options: ["Polietilen", "PVC", "Poliester", "Nilon", "Akrilik"],
      correctAnswer: "PVC",
      explanation: "PVC (Polivinil Klorida) adalah polimer yang digunakan dalam pembuatan berbagai produk plastik keras, seperti pipa air.",
    },
    {
      question: "Senyawa yang terbentuk dari dua atau lebih unit monomer yang bergabung melalui reaksi kondensasi disebut..",
      options: ["Polimer", "Dimer", "Monomer", "Dimetilpolisiloksan", "Alkohol"],
      correctAnswer: "Polimer",
      explanation: "Polimer terbentuk ketika dua atau lebih unit monomer bergabung melalui reaksi kondensasi, yang menghilangkan molekul kecil seperti air.",
    },
    {
      question: "Proses pembuatan polietilen dengan cara pemanasan pada tekanan tinggi disebut..",
      options: ["Polimerisasi radikal bebas", "Polimerisasi kondensasi", "Polimerisasi adisi", "Polimerisasi jaringan silang", "Polimerisasi kopolimer"],
      correctAnswer: "Polimerisasi radikal bebas",
      explanation: "Polimerisasi radikal bebas adalah proses yang digunakan untuk membuat polietilen, di mana radikal bebas memulai reaksi adisi untuk menghasilkan rantai polimer.",
    },
    {
      question: "Polimer yang digunakan dalam pembuatan pakaian dan tekstil serta memiliki sifat kuat dan elastis adalah..",
      options: ["Polietilen", "Nilon", "PVC", "Teflon", "Poliester"],
      correctAnswer: "Nilon",
      explanation: "Nilon adalah polimer sintetis yang digunakan dalam pembuatan tekstil karena sifatnya yang kuat, elastis, dan tahan lama.",
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
        <h1 className="main-title">Materi Makromolekul Secara Lengkap</h1>
      </header>

      <section>
        <p>
          Setiap hari kita pasti mengonsumsi nasi, daging, susu, dan makanan lainnya sebagai suatu kebutuhan bagi tubuh. Makanan yang kita konsumsi tersebut dikategorikan menjadi beberapa jenis, yaitu karbohidrat, protein, dan lemak. Ketiga jenis makanan tersebut tentunya memiliki peran yang berbeda-beda bagi tubuh kita.
        </p>
        <p>
          Semua jenis makanan yang kita konsumsi tersebut digolongkan ke dalam makromolekul atau molekul besar. Mari kita simak pembahasan mengenai makromolekul yang akan menjelaskan karbohidrat, protein, dan lemak dari berbagai tinjauan.
        </p>
      </section>

      <h2 className="section-title">1. Pengertian dan Rumus Umum Karbohidrat</h2>
      <p>
        Karbohidrat merupakan makromolekul yang terdiri dari atom karbon, hidrogen, dan oksigen dengan rumus umum C<sub>n</sub>(H<sub>2</sub>O)<sub>m</sub>. Karbohidrat disebut juga sebagai senyawa poli hidroksi aldehida atau polihidroksi keton dan turunannya.
      </p>

      <h3>Monosakarida</h3>
      <p>
        Monosakarida merupakan karbohidrat paling sederhana dan tidak bisa mengalami proses hidrolisis. Contoh monosakarida termasuk glukosa, fruktosa, dan galaktosa.
      </p>

      <h3>Oligosakarida</h3>
      <p>
        Oligosakarida merupakan karbohidrat yang tersusun dari dua atau lebih monosakarida. Contoh disakarida termasuk laktosa, maltosa, dan sukrosa.
      </p>

      <h3>Polisakarida</h3>
      <p>
        Polisakarida merupakan karbohidrat yang terdiri dari banyak monosakarida. Contoh polisakarida termasuk selulosa, amilum, dan glikogen.
      </p>

      <h2 className="section-title">2. Uji Karbohidrat</h2>
      <h3>Uji Molisch</h3>
      <p>Uji ini dilakukan dengan menambahkan larutan alfanaftol pada sampel yang diuji, kemudian ditambahkan asam sulfat pekat.</p>

      <h3>Uji Fehling</h3>
      <p>Uji ini dilakukan untuk mengetahui adanya gula pereduksi pada sampel.</p>

      <h3>Uji Iodin</h3>
      <p>Uji ini dilakukan untuk mengetahui jenis polisakarida pada sampel yang diuji.</p>

      <h2 className="section-title">3. Pengertian Protein</h2>
      <p>
        Protein merupakan polimer yang tersusun dari monomer berupa asam amino. Unsur penyusun utama dalam suatu protein terdiri dari karbon (C), hidrogen (H), oksigen (O), dan nitrogen (N).
      </p>

      <h3>Asam Amino</h3>
      <p>
        Asam amino merupakan monomer penyusun protein yang memiliki rumus umum. Asam amino memiliki sifat amfoter dan dapat membentuk ion zwitter.
      </p>

      <h2 className="section-title">4. Struktur dan Bentuk Protein</h2>
      <p>
        Terdapat 4 struktur protein, yaitu struktur primer, sekunder, tersier, dan kuartener.
      </p>

      <h2 className="section-title">5. Uji Protein</h2>
      <h3>Uji Biuret</h3>
      <p>Uji ini digunakan untuk mengidentifikasi keberadaan protein atau asam amino.</p>

      <h2 className="section-title">6. Pengertian dan Struktur Lemak</h2>
      <p>
        Lemak merupakan senyawa ester dari gliserol dengan asam-asam karboksilat. Lemak dibedakan menjadi lemak jenuh dan tidak jenuh.
      </p>

      <h3>Lemak Jenuh</h3>
      <p>
        Lemak jenuh adalah lemak yang tidak memiliki ikatan ganda dalam rantai karbonnya. Contoh lemak jenuh termasuk asam stearat dan asam palmitat.
      </p>

      <h3>Lemak Tidak Jenuh</h3>
      <p>
        Lemak tidak jenuh memiliki satu atau lebih ikatan ganda dalam rantai karbonnya. Contoh lemak tidak jenuh termasuk asam oleat dan asam linoleat.
      </p>

      <h2 className="section-title">7. Uji Lemak</h2>
      <h3>Uji Saponifikasi</h3>
      <p>Uji ini dilakukan untuk mengetahui keberadaan lemak dengan cara mereaksikan lemak dengan alkali.</p>

      <h3>Uji Sudan III</h3>
      <p>Uji ini digunakan untuk mendeteksi keberadaan lemak dalam sampel dengan menggunakan pewarna Sudan III.</p>

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
};

export default Makromolekul;