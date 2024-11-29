import React, { useState } from "react";
import "./forum.css";

function forum() {
  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      title: "What are the differences between covalent and ionic bonds?",
      author: "John Doe",
      date: "November 29, 2024",
    },
    {
      id: 2,
      title: "Tips for understanding redox reactions?",
      author: "Jane Smith",
      date: "November 28, 2024",
    },
    {
      id: 3,
      title: "Can someone explain the properties of benzene?",
      author: "Alan Walker",
      date: "November 27, 2024",
    },
  ]);

  const handleNewDiscussion = () => {
    alert("Feature to create a new discussion coming soon!");
  };

  return (
    <div className="forum-container">
      <header className="forum-header">
        <h1>Discussion Forum</h1>
        <p>Join the conversation and enhance your understanding of chemistry!</p>
        <button className="new-discussion-button" onClick={handleNewDiscussion}>
          Start New Discussion
        </button>
      </header>
      <section className="discussion-list">
        {discussions.map((discussion) => (
          <div key={discussion.id} className="discussion-item">
            <h3 className="discussion-title">{discussion.title}</h3>
            <p className="discussion-meta">
              By {discussion.author} on {discussion.date}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Forum;
