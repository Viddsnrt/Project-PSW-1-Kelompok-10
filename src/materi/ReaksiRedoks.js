import React, {useState} from 'react';
import './ReaksiRedoks.css';

function ReaksiRedoks() {
  const questions = [
    {
      question: "Apa yang dimaksud dengan reaksi redoks?",
      options: [
        "Reaksi yang melibatkan perpindahan elektron",
        "Reaksi yang hanya melibatkan perpindahan proton",
        "Reaksi yang menghasilkan energi",
        "Reaksi yang melibatkan gas",
      ],
      answer: "Reaksi yang melibatkan perpindahan elektron",
      explanation: "Reaksi redoks melibatkan perpindahan elektron antara dua zat, satu teroksidasi dan satu lagi tereduksi.",
    },
    {
      question: "Berapakah bilangan oksidasi unsur Brom dalam senyawa HBrO₄",
      options: [
        "+7",
        "+3",
        "-7",
        "+4",
      ],
      answer: "+7",
      explanation: "Biloks % = +1Biloks % + biloks O + bilok Br =  + biloks Br =  + biloks Br = Biloks Br = +7",
    },
    {
      question: "Contoh dari sel galvani ialah?",
      options: [
        "Logam",
        "Gas",
        "Baterai",
        "Tembaga",
      ],
      answer: "Baterai",
      explanation: "Karena Sel galvani mengubah energi kimia menjadi energi listrik",
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);

    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
      setShowFeedback(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setScore(0);
    setShowFeedback(false);
    setQuizCompleted(false);
    setQuizStarted(false);
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
        <h4><strong> Aturan penentuan biloks: </strong></h4>
        <ul>
          <li>Unsur bebas (unsur murni) memiliki biloks 0. </li>
          <li>Ion monoatomik memiliki biloks sesuai muatannya. </li>
          <li>Biloks oksigen dalam senyawa biasanya -2, kecuali pada peroksida (-1) dan senyawa dengan fluor</li>
          <li>Biloks hidorgen dalam senyawa baisanya +1, kecuali dalam hidrida logam (-1)</li>
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

      <section classname="aplikasi">
        <h3>Aplikasi Reaksi Redoks</h3>
        <p>Apliksi reaksi redoks dapat ditemui dalam beberapa bidang antara lain sebagai berikut :</p>
        <h4>1. Industri</h4>
        <ul>
          <li>Pemurnian logam (elektrolisis) </li>
          <li>Produksi bahan kimia seperti amonia (reaksi Haber-Bosch)</li>
        </ul>
        <h4>2. Biologi</h4>
        <ul>
          <li>Respirasi seluler (reaksi glukosa dan oksigen menghasilkan energi)</li>
          <li>Fotosintesis</li>
        </ul>
        <h4>3. Lingkungan</h4>
        <ul>
          <li>Proses pengolahan limbah</li>
          <li>Pengendalian polusi udara</li>
        </ul>
        <h4>4. Kehidupan Sehari-hari</h4>
        <ul>
          <li>Baterai dan aki</li>
          <li>Proses karat pada logam</li>
        </ul>
      </section>

      <section className="contoh-soal">
        <h3>Contoh Soal</h3>
        <p><strong>Soal 1:</strong> Hitung potensial sel untuk sel galvani yang terdiri dari elektroda Zn/Zn²⁺ (E° = -0,76 V) dan elektroda Cu/Cu²⁺ (E° = +0,34 V).</p>
        <p><strong>Penyelesaian:</strong></p>
        <p>
          E°<sub>sel</sub> = E°<sub>katoda</sub> - E°<sub>anoda</sub><br />
          = (+0,34 V) - (-0,76 V)<br />
          = +1,10 V
        </p>
        <p><strong>Jawaban:</strong> Potensial sel adalah +1,10 V.</p>

        <p><strong>Soal 2:</strong> Pada reaksi redoks, mana yang mengalami oksidasi dan reduksi dalam reaksi berikut?<br />
        Zn + Cu²⁺ → Zn²⁺ + Cu</p>
        <p><strong>Penyelesaian:</strong></p>
        <p>
          - Zn mengalami oksidasi menjadi Zn²⁺.<br />
          - Cu²⁺ mengalami reduksi menjadi Cu.
        </p>
        <p><strong>Jawaban:</strong> Zn teroksidasi dan Cu²⁺ tereduksi.</p>
      </section>

      <section className="quiz-container">

      {!quizStarted ? (
        <div className="start-container">
          <h3>Mini Quiz</h3>
          <button onClick={handleStartQuiz}>Mulai Quiz</button>
        </div>
      ) : quizCompleted ? (
        <div className="quiz-complete">
          <p>Mini Quiz untuk materi Reaksi Redoks selesai! Skor kamu: <strong>{score}/{questions.length}</strong></p>
          <button onClick={handleRestartQuiz}>Coba Lagi</button>
        </div>
      ) : (
        <>
          <div className="question">
            <p>{questions[currentQuestion].question}</p>
          </div>

          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${selectedAnswer === option ? 'selected' : ''}`}
                onClick={() => handleAnswerClick(option)}
                disabled={showFeedback}
              >
                {option}
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className={`feedback ${selectedAnswer === questions[currentQuestion].answer ? 'correct' : 'incorrect'}`}>
              <p>
                {selectedAnswer === questions[currentQuestion].answer
                  ? 'Jawaban kamu benar!'
                  : `Jawaban salah. Jawaban yang benar: "${questions[currentQuestion].answer}".`}
              </p>
              <p><strong>Penjelasan:</strong> {questions[currentQuestion].explanation}</p>
            </div>
          )}

          <div className="navigation">
            <button onClick={handleNextClick} disabled={!showFeedback}>
              {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
            </button>
          </div>

          <div className="score">
            <p>Skor: {score}</p>
          </div>
        </>
      )}
    </section>

    </div>
  );
}

export default ReaksiRedoks;