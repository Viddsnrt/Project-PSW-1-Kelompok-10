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
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);

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
                  selectedOption === option ? "selected" : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={handleNextQuestion}
            className="next-button"
            disabled={!selectedOption}
          >
            {currentQuestion < questions.length - 1 ? "Pertanyaan Selanjutnya" : "Lihat Skor"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
