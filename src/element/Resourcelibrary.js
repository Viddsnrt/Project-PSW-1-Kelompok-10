import React from "react";
import "./Resourcelibrary.css";

function ResourceLibrary() {
  const resources = [
    {
      id: 1,
      title: "Chemistry Basics - E-book",
      description: "A comprehensive guide to fundamental chemistry concepts.",
      type: "E-book",
      link: "https://www.academia.edu/43792103/BUKU_KIMIA_UNTUK_KELAS_12_SMA",
    },
    {
      id: 2,
      title: "Understanding the Periodic Table",
      description: "A detailed video explaining the periodic table and its trends.",
      type: "Video",
      link: "https://www.youtube.com/watch?v=okolv1y6IlE",
    },
    {
      id: 3,
      title: "Organic Chemistry Notes",
      description: "A curated set of notes on organic reactions and mechanisms.",
      type: "PDF",
      link: "https://static.buku.kemdikbud.go.id/content/pdf/bukuteks/kurikulum21/Kimia_BS_KLS_XII.pdf",
    },
    {
      id: 4,
      title: "Experiment: Acid-Base Titration",
      description: "Step-by-step instructions for a classic chemistry experiment.",
      type: "Article",
      link: "https://digitalcommons.usf.edu/ujmm/vol10/iss1/8/",
    },
  ];

  return (
    <div className="resource-library-container">
      <header className="resource-library-header">
        <h1>Resource Library</h1>
        <p>Explore our curated collection of chemistry resources.</p>
      </header>
      
      <section className="resource-list">
        {resources.map((resource) => (
          <div className="resource-card" key={resource.id}>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <p><strong>Type:</strong> {resource.type}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer" className="resource-link">
              Access Resource
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ResourceLibrary;
