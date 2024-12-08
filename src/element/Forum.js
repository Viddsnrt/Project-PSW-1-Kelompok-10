import React, { useState } from "react";
import "./forum.css";

function Forum() {
  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      title: "Apa perbedaan antara ikatan kovalen dan ionik?",
      author: "John Doe",
      date: "29 November 2024",
    },
    {
      id: 2,
      title: "Tips memahami reaksi redoks?",
      author: "Jane Smith",
      date: "28 November 2024",
    },
    {
      id: 3,
      title: "Bisakah seseorang menjelaskan sifat-sifat benzena?",
      author: "Alan Walker",
      date: "27 November 2024",
    },
  ]);

  const [showMessage, setShowMessage] = useState(false);

  const handleNewDiscussion = () => {
    setShowMessage(true); // Set state ke true ketika tombol diklik
  };

  return (
    <div className="forum-container">
      <header className="forum-header">
        <h1>Forum Diskusi</h1>
        <p>
          Bergabunglah dalam diskusi dan tingkatkan pemahamanmu tentang kimia!
        </p>
        <button
          className="new-discussion-button"
          onClick={handleNewDiscussion}
        >
          Mulai Diskusi Baru
        </button>
        {showMessage && (
          <p className="coming-soon-message">
            Fitur untuk membuat diskusi baru segera hadir!
          </p>
        )}
      </header>
      <section className="discussion-list">
        {discussions.map((discussion) => (
          <div key={discussion.id} className="discussion-item">
            <h3 className="discussion-title">{discussion.title}</h3>
            <p className="discussion-meta">
              Oleh {discussion.author} pada {discussion.date}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Forum;
