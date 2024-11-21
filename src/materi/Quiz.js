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
      explanation: "Reaksi redoks adalah reaksi yang melibatkan transfer elektron antara dua zat.",
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
      explanation: "Elektrolisis adalah proses pemisahan senyawa menjadi komponen-komponennya dengan menggunakan arus listrik.",
    },
    {
      question: "Apakah fungsi dari anoda dalam sel galvani?",
      options: [
        "Sebagai tempat terjadinya oksidasi",
        "Sebagai tempat terjadinya reduksi",
        "Menghasilkan listrik",
        "Sebagai pelarut",
      ],
      answer: "Sebagai tempat terjadinya oksidasi",
      explanation: "Anoda adalah elektroda tempat terjadinya reaksi oksidasi dalam sel galvani.",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showScore, setShowScore] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].answer) {
      setFeedback('Benar!');
    } else {
      setFeedback('Salah! ' + questions[currentQuestion].explanation);
    }
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    setFeedback('');

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setShowScore(false);
    setFeedback('');
  };

  return (
    <div className="quiz-container">
      <h2>Latihan Soal: Quiz Kimia Kelas 12</h2>
      {showScore ? (
        <div className="score-section">
          <p>Skor Anda: {score} dari {questions.length}</p>
          <button onClick={handleRestartQuiz}>Mulai Ulang Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <p className="question-text">
            {currentQuestion + 1}. {questions[currentQuestion].question}
          </p>
          <div className="options-section">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                className={`option-button ${
                  selectedOption === option ? (option === questions[currentQuestion].answer ? "correct" : "incorrect") : ""
                }`}
                onClick={() => handleOptionClick(option)}
                disabled={selectedOption !== null} // Nonaktifkan tombol setelah memilih
              >
                {option}
              </button>
            ))}
          </div>
          {feedback && <p className="feedback">{feedback}</p>}
          <button
            onClick={handleNextQuestion}
            className="next-button"
            // disabled={selectedOption === null} // Tombol hanya aktif jika ada pilihan yang dipilih
          >
           
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;