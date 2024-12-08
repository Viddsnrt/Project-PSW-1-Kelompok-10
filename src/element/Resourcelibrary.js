import React from "react";
import "./Resourcelibrary.css";

function ResourceLibrary() {
  const resources = [
    {
      id: 1,
      title: "Dasar-Dasar Kimia - E-book",
      description: "Panduan lengkap untuk konsep dasar kimia.",
      type: "E-book",
      link: "https://www.academia.edu/43792103/BUKU_KIMIA_UNTUK_KELAS_12_SMA",
    },
    {
      id: 2,
      title: "Memahami Tabel Periodik",
      description: "Video mendetail yang menjelaskan tabel periodik dan trennya.",
      type: "Video",
      link: "https://www.youtube.com/watch?v=okolv1y6IlE",
    },
    {
      id: 3,
      title: "Catatan Kimia Organik",
      description: "Kumpulan catatan yang disusun tentang reaksi dan mekanisme organik.",
      type: "PDF",
      link: "https://static.buku.kemdikbud.go.id/content/pdf/bukuteks/kurikulum21/Kimia_BS_KLS_XII.pdf",
    },
    {
      id: 4,
      title: "Eksperimen: Titrasi Asam-Basa",
      description: "Instruksi langkah demi langkah untuk eksperimen kimia klasik.",
      type: "Artikel",
      link: "https://digitalcommons.usf.edu/ujmm/vol10/iss1/8/",
    },
  ];

  return (
    <div className="resource-library-container">
      <header className="resource-library-header">
        <h1>Perpustakaan Sumber Belajar</h1>
        <p>Jelajahi koleksi sumber belajar kimia pilihan kami.</p>
      </header>
      
      <section className="resource-list">
        {resources.map((resource) => (
          <div className="resource-card" key={resource.id}>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <p><strong>Jenis:</strong> {resource.type}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer" className="resource-link">
              Akses Sumber Belajar
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ResourceLibrary;
