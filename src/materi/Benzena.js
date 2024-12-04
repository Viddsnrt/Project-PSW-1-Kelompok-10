import React, { useState } from "react";
import "./Benzena.css";

function Benzena() {
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
      explanation: "Magnesium kehilangan elektron dan membentuk ion Mg²⁺, sehingga mengalami oksidasi.",
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
      explanation : "Dalam NaCl, klor (Cl) memiliki bilangan oksidasi -1, karena Cl menerima satu elektron dari Na.",
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
    <div className="benzena-container">
      <h1 className="main-title">Bab 5: Benzena dan Turunannya</h1>
      <p className="intro-text">
        Benzena adalah senyawa aromatik dengan rumus molekul C<sub>6</sub>H<sub>6</sub>. Senyawa ini memiliki struktur cincin enam karbon dengan delokalisasi elektron pi, yang memberikan stabilitas unik. Benzena merupakan bahan dasar penting untuk banyak senyawa kimia lainnya.
      </p>
      
      <section>
        <h2 className="section-title">Struktur Benzena</h2>
        <p>
          Struktur benzena pertama kali dijelaskan oleh Kekulé sebagai cincin dengan ikatan tunggal dan ganda yang berselang-seling. Namun, model ini telah dimodifikasi menjadi model delokalisasi elektron pi, di mana semua ikatan dalam cincin memiliki panjang yang sama.
        </p>
        <div className="image-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Benzene-2D-full.svg"
            alt="Struktur Benzena"
            className="benzene-image"
          />
          <p className="image-caption">Gambar 1: Struktur cincin benzena dengan delokalisasi elektron pi.</p>
        </div>
      </section>

      <section>
        <h1 className="section-title">Sifat Kimia Benzena</h1>
        <h2>Pengertian Benzena</h2>
        <p>
          Benzena dan turunannya adalah salah satu materi Kimia yang akan kamu pelajari di kelas 12 SMA. Lalu, apa itu benzena?
        </p>
        <p>
          Benzena adalah senyawa siklik yang terbentuk dari enam atom karbon yang berikatan dalam cincin. Senyawa ini bersifat nonpolar, tidak berwarna, mudah terbakar, dan tidak larut dalam air, tapi dapat larut dalam pelarut organik.
        </p>
        <p>
          Senyawa dengan rumus kimia C6H6 ini, ditemukan oleh seorang ilmuwan Inggris bernama Michael Faraday pada tahun 1825. Pada saat itu, Michael Faraday mengambilnya dari residu minyak mentah, kemudian mengisolasinya dari gas minyak.
        </p>
        <p>
          Enam atom hidrogen yang terdapat dalam benzena ini dapat digantikan menjadi satu lebih atom hidrogen sehingga menghasilkan turunan benzena. Turunan benzena yang dihasilkan ini selanjutnya dapat digunakan dalam kehidupan manusia sehari-hari. Misalnya, sebagai desinfektan, pembuatan zat pewarna, obat-obatan, dan masih banyak lagi.
        </p>
      </section>

      <h2>Senyawa Turunan Benzena</h2>
      <p>
        Benzena dikenal sebagai senyawa yang banyak menghasilkan berbagai turunan karena pergantian satu atau lebih atom hidrogen pada benzena dapat menghasilkan berbagai senyawa baru. Berikut adalah beberapa senyawa turunan benzena.
      </p>

      <h3>Klorobenzena</h3>
      <p>
        Klorobenzena atau fenil klorida adalah salah satu sen yawa turunan benzena. Senyawa yang memiliki rumus C6H5Cl ini memiliki ciri-ciri berupa berwujud cair, tidak berwarna, berbau menyengat, dan tidak mudah larut dalam air, tetapi mudah larut dalam benzena, kloroform, dan eter.
      </p>
      <p>
        Klorobenzena biasanya digunakan dalam pembuatan fenol, anilin, DDT, pelarut cat, dan media pemindah panas.
      </p>

      <h3>Anilin</h3>
      <p>
        Anilin atau aminobenzena (C6H5NH2) adalah turunan benzena yang memiliki sifat basa lemah, tidak berwarna, dan dapat berubah menjadi kuning, coklat, ataupun hitam jika terkena cahaya dan udara karena teroksidasi.
      </p>
      <p>
        Dalam kehidupan sehari-hari, anilin digunakan sebagai bahan dasar pembuatan warna dan obat-obatan, serta bahan peledak.
      </p>

      <h3>Fenol</h3>
      <p>
        Senyawa turunan benzena selanjutnya adalah fenol. Senyawa ini termasuk senyawa aromatik yang mengandung satu atau lebih gugus hidroksil yang terikat langsung dengan cincin benzena.
      </p>
      <p>
        Fenol atau hidroksibenzena memiliki rumus kimia C6H5OH dengan karakteristiknya yang berbentuk padatan kristalin, tak berwarna, higroskopis, dan mudah larut dalam alkohol, eter, dan benzena.
      </p>
      <p>
        Senyawa turunan benzena ini sangat beracun, bahkan dapat melepuhkan kulit jika terjadi kontak langsung dengan kulit. Biasanya, fenol digunakan untuk desinfektan, pembuatan obat-obatan, bahan peledak, dan plastik.
      </p>

      <h3>Aspirin</h3>
      <p>
        Apakah kamu sering mengkonsumsi aspirin ketika sedang pusing, demam, atau mengalami peradangan? Aspirin yang kamu minum ini ternyata termasuk salah satu turunan benzena, lho.
      </p>
      <p>
        Aspirin atau asam asetilsalisilat sering digunakan untuk meredakan nyeri dan menurunkan panas karena bersifat analgesik, antipiretik, antiradang, dan antikoagulan. Itulah mengapa, aspirin sering digunakan sebagai obat pusing dan obat sakit gigi.
      </p>

      <h3>Asam Salisilat</h3>
      <p>
        Asam salisilat merupakan turunan benzena yang tergolong asam karboksilat sehingga memiliki gugus karboksil (-COOH).
      </p>
      <p>
        Asam salisilat memiliki sifat beracun jika digunakan dalam jumlah besar. Namun, dalam jumlah kecil, turunan benzena ini dapat digunakan sebagai pengawet makanan dan antiseptik pada pasta gigi.
      </p>

      <h3>TNT (Trinitrotoluene)</h3>
      <p>
        TNT merupakan senyawa turunan benzena yang banyak digunakan sebagai bahan peledak karena sifatnya yang mudah meledak. Itulah mengapa, senyawa ini tidak boleh digunakan secara sembarangan.
      </p>
      <p>
        Biasanya, TNT sering digunakan untuk kepentingan militer dan pertambangan. Penggunaan TNT secara sembarangan dan tidak bertanggung jawab dapat menyebabkan kerusakan lingkungan, bahkan mengancam nyawa.
      </p>

      <h3>Nitrobenzena</h3>
      <p>
        Memiliki rumus kimia C6H5NO2, turunan benzena yang satu ini juga dikenal dengan nama lain, yaitu nitrobenzol atau minyak mirbane. Nitrobenzena memiliki aroma seperti kacang almond dan bersifat beracun.
      </p>
      <p>
        Biasanya, turunan benzena ini digunakan sebagai pelarut dan bahan baku pembuatan anilina, serta digunakan dalam produk semir dan senyawa insulator.
      </p>

      <h3>Parasetamol</h3>
      <p>
        Sama seperti aspirin, parasetamol juga termasuk salah satu turunan benzena yang sering digunakan untuk mengobati pusing dan sakit kepala. Senyawa ini memiliki sifat analgesik dan antipiretik, serta mudah larut dalam etanol.
      </p>

      <h4>Tata Nama Senyawa Turunan Benzena</h4>
      <p>
        Tata nama senyawa turunan benzena sangat sederhana, yaitu gabungan nama substituen (pengganti atom H dari benzena) sebagai awalan dan diikuti kata benzena sebagai akhiran. Berikut adalah penulisan tata nama senyawa turunan benzena berdasarkan jumlah substituennya.
      </p>

      <h4>Nama Turunan Benzena Satu Substituen</h4>
      <p>
        Untuk menulis tata nama senyawa turunan benzena dengan satu substituen yang terikat pada cincin benzena, kamu bisa langsung menyebutkan nama substituennya, lalu diikuti kata -benzena di bagian akhirnya. Contoh, jika substituen yang terikat pada cincin benzena adalah bromin (Br), maka penulisan tata nama senyawa turunan benzenanya adalah bromobenzena.
      </p>

      <h4>Nama Turunan Benzena Dua Substituen</h4>
      <p>
        Untuk dua substituen posisinya dapat diberi awalan orto (o) untuk posisi 1 dan 2, meta (m) untuk posisi 1 dan 3 dan para (p) untuk posisi 1 dan 4.
      </p>
      <p>
        Agar lebih mudah dipahami, coba perhatikan contoh-contoh berikut:
      </p>

      <img
        src="https://www.quipper.com/id/blog/wp-content/uploads/2023/04/contoh-tata-nama-senyawa-turunan-benzena.webp"
        alt="Turunan-2benzena" />

      <h4>Nama Turunan Benzena Tiga Substituen atau Lebih</h4>
      <p>
        Bagaimana kalau substituennya ada tiga atau mungkin lebih? Untuk tiga substituen atau lebih, penggunaan awalan orto, meta, dan para tidak diterapkan lagi, tetapi posisi substituennya dinyatakan dengan angka untuk menunjukkan urutan prioritas penomoran. 
      </p>
      <p>
        Berikut urutan prioritas penomorannya:
      </p>
      <ul>
        <li>COOH</li>
        <li>−SO3H</li>
        <li>−CHO</li>
        <li>−CN</li>
        <li>−OH</li>
        <li>−NH2</li>
        <li>−R</li>
        <li>−NO2</li>
        <li>−X</li>
      </ul>
      <img
        src="https://www.quipper.com/id/blog/wp-content/uploads/2023/04/tata-nama-senyawa-tiga-substituen.webp"
        alt="Turunan-3benzana" />

      <h1>Kegunaan dan Bahaya Senyawa Turunan Benzena</h1>
      <p>
        Benzena maupun senyawa turunan benzena banyak dimanfaatkan dalam berbagai bidang, seperti farmasi, makanan, dan kemiliteran. Contohnya, aspirin yang merupakan senyawa turunan benzena yang dapat digunakan sebagai obat pereda nyeri, asam benzoat digunakan sebagai bahan pengawet makanan, dan asam salisilat yang dapat digunakan sebagai bahan pembuatan minyak wangi, salep antijamur, sampo, dan bedak.
      </p>
      <p>
        Dalam bidang kemiliteran, senyawa turunan benzena, seperti TNT dan toluena sering digunakan sebagai bahan peledak.
      </p>
      <p>
        Meskipun memiliki banyak kegunaan, tetapi benzena maupun senyawa turunannya dapat berbahaya karena bersifat racun. Contohnya saja, senyawa fenol yang apabila terkena kulit dapat menyebabkan kulit melepuh dan TNT yang dapat menyebabkan kerusakan lingkungan, bahkan mengancam nyawa bila digunakan secara sembarangan dan tidak bertanggung jawab karena senyawa ini mudah meledak.
      </p>
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
                class Name="quiz-feedback ${getFeedbackClass(explanations[currentQuestionIndex].correct)}"
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

export default Benzena;