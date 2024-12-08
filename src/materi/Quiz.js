import React, { useState } from 'react';
import './Quiz.css';

function Quiz() {
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
      question: "Apa yang dimaksud dengan elektrolisis?",
      options: [
        "Proses kimia yang menghasilkan arus listrik",
        "Proses pemisahan senyawa dengan listrik",
        "Reaksi spontan dalam sel galvani",
        "Proses oksidasi tanpa reduksi",
      ],
      answer: "Proses pemisahan senyawa dengan listrik",
      explanation: "Elektrolisis adalah proses pemisahan senyawa kimia dengan menggunakan arus listrik.",
    },
    {
      question: "Apa itu entalpi?",
      options: [
        "Jumlah panas dalam reaksi kimia pada tekanan tetap",
        "Jumlah panas dalam reaksi kimia pada volume tetap",
        "Jumlah energi kinetik dalam reaksi kimia",
        "Jumlah energi potensial dalam reaksi kimia",
      ],
      answer: "Jumlah panas dalam reaksi kimia pada tekanan tetap",
      explanation: "Entalpi adalah jumlah panas yang ada dalam suatu sistem pada tekanan tetap.",
    },
    {
      question: "Apa itu katalis?",
      options: [
        "Zat yang memperlambat reaksi kimia",
        "Zat yang mempercepat reaksi kimia tanpa habis bereaksi",
        "Zat yang mengubah hasil reaksi kimia",
        "Zat yang hanya bereaksi dengan air",
      ],
      answer: "Zat yang mempercepat reaksi kimia tanpa habis bereaksi",
      explanation: "Katalis adalah zat yang mempercepat reaksi kimia tanpa habis dalam reaksi tersebut.",
    },
    {
      question: "Apa yang dimaksud dengan hukum kekekalan massa?",
      options: [
        "Jumlah massa sebelum dan sesudah reaksi adalah sama",
        "Jumlah energi sebelum dan sesudah reaksi adalah sama",
        "Jumlah zat sebelum dan sesudah reaksi adalah sama",
        "Jumlah volume sebelum dan sesudah reaksi adalah sama",
      ],
      answer: "Jumlah massa sebelum dan sesudah reaksi adalah sama",
      explanation: "Hukum kekekalan massa menyatakan bahwa massa zat sebelum dan sesudah reaksi kimia adalah tetap.",
    },
    {
      question: "Apa itu energi aktivasi?",
      options: [
        "Energi minimum untuk memulai reaksi kimia",
        "Energi maksimum dalam reaksi kimia",
        "Energi yang dilepaskan selama reaksi kimia",
        "Energi kinetik dari molekul gas",
      ],
      answer: "Energi minimum untuk memulai reaksi kimia",
      explanation: "Energi aktivasi adalah energi minimum yang dibutuhkan agar reaksi kimia dapat berlangsung.",
    },
    {
      question: "Apa itu reaksi endoterm?",
      options: [
        "Reaksi yang menyerap energi dari lingkungan",
        "Reaksi yang melepaskan energi ke lingkungan",
        "Reaksi yang tidak melibatkan perpindahan energi",
        "Reaksi yang menghasilkan gas",
      ],
      answer: "Reaksi yang menyerap energi dari lingkungan",
      explanation: "Reaksi endoterm adalah reaksi yang menyerap energi dalam bentuk panas dari lingkungan.",
    },
    {
      question: "Apa itu pH?",
      options: [
        "Ukuran konsentrasi ion H+ dalam larutan",
        "Ukuran suhu larutan",
        "Ukuran konsentrasi ion OH- dalam larutan",
        "Ukuran massa larutan",
      ],
      answer: "Ukuran konsentrasi ion H+ dalam larutan",
      explanation: "pH mengukur konsentrasi ion H+ dalam larutan, menunjukkan sifat asam atau basa larutan tersebut.",
    },
    {
      question: "Apa itu buffer?",
      options: [
        "Larutan yang dapat mempertahankan pH terhadap penambahan asam atau basa",
        "Larutan yang selalu bersifat asam",
        "Larutan yang tidak bereaksi dengan apapun",
        "Larutan yang hanya terdiri dari basa",
      ],
      answer: "Larutan yang dapat mempertahankan pH terhadap penambahan asam atau basa",
      explanation: "Buffer adalah larutan yang mampu mempertahankan kestabilan pH meskipun ditambahkan sedikit asam atau basa.",
    },
    {
      question: "Apa itu reaksi eksoterm?",
      options: [
        "Reaksi yang melepaskan energi ke lingkungan",
        "Reaksi yang menyerap energi dari lingkungan",
        "Reaksi yang membutuhkan energi aktivasi tinggi",
        "Reaksi yang tidak menghasilkan perubahan energi",
      ],
      answer: "Reaksi yang melepaskan energi ke lingkungan",
      explanation: "Reaksi eksoterm adalah reaksi yang menghasilkan energi, biasanya dalam bentuk panas.",
    },
    {
      question: "Apa yang dimaksud dengan katalisator enzim?",
      options: [
        "Protein yang mempercepat reaksi biokimia",
        "Karbohidrat yang memperlambat reaksi",
        "Asam nukleat yang mengontrol metabolisme",
        "Lipid yang menghasilkan energi",
      ],
      answer: "Protein yang mempercepat reaksi biokimia",
      explanation: "Katalisator enzim adalah protein khusus yang mempercepat reaksi kimia di dalam tubuh makhluk hidup.",
    },
    {
      question: "Apa itu reaksi pengendapan?",
      options: [
        "Reaksi yang menghasilkan zat padat dalam larutan",
        "Reaksi yang menghasilkan gas dalam larutan",
        "Reaksi yang hanya terjadi pada suhu tinggi",
        "Reaksi yang menghasilkan larutan jenuh",
      ],
      answer: "Reaksi yang menghasilkan zat padat dalam larutan",
      explanation: "Reaksi pengendapan adalah reaksi kimia di mana terbentuk zat padat yang tidak larut dalam larutan.",
    },
    {
      question: "Apa itu isotop?",
      options: [
        "Atom dengan jumlah proton yang sama tetapi neutron berbeda",
        "Atom dengan jumlah proton dan elektron berbeda",
        "Atom yang hanya memiliki satu jenis neutron",
        "Atom yang selalu bersifat radioaktif",
      ],
      answer: "Atom dengan jumlah proton yang sama tetapi neutron berbeda",
      explanation: "Isotop adalah atom dari unsur yang sama dengan jumlah proton sama tetapi jumlah neutron berbeda.",
    },
    {
      question: "Apa itu hukum Boyle?",
      options: [
        "Tekanan gas berbanding terbalik dengan volumenya pada suhu tetap",
        "Tekanan gas berbanding lurus dengan volumenya pada suhu tetap",
        "Tekanan gas tidak berubah meski volumenya berubah",
        "Tekanan gas hanya berlaku dalam sistem tertutup",
      ],
      answer: "Tekanan gas berbanding terbalik dengan volumenya pada suhu tetap",
      explanation: "Hukum Boyle menyatakan bahwa tekanan gas akan meningkat jika volumenya berkurang pada suhu tetap.",
    },
    {
      question: "Apa fungsi utama dari sel elektrokimia?",
      options: [
        "Menghasilkan listrik dari reaksi kimia",
        "Menghasilkan gas dari reaksi kimia",
        "Mengontrol pH larutan",
        "Menghasilkan katalis untuk reaksi kimia",
      ],
      answer: "Menghasilkan listrik dari reaksi kimia",
      explanation: "Sel elektrokimia berfungsi untuk menghasilkan arus listrik melalui reaksi redoks.",
    },
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
    <div className="quiz-container">
      <h2>Kuis</h2>

      {!quizStarted ? (
        <div className="start-container">
          <p>Quiz ini untuk melatih pemahaman kamu tentang materi kimia kelas 12</p>
          <button onClick={handleStartQuiz}>Mulai</button>
        </div>
      ) : quizCompleted ? (
        <div className="quiz-complete">
          <p>Quiz selesai! Skor kamu: <strong>{score}/{questions.length}</strong></p>
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
    </div>
  );
}

export default Quiz;
