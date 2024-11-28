import React from "react";
import { Link } from "react-router-dom";
import "./ProgramPembelajaran.css";

function ProgramPembelajaran({ onLinkClick }) {
  const programs = [
    {
      path: "/program-pembelajaran/sifat-koligatif",
      title: "Sifat Koligatif Larutan",
      image: "https://via.placeholder.com/150?text=Sifat+Koligatif", // Ganti dengan gambar yang sesuai
    },
    {
      path: "/program-pembelajaran/reaksi-redoks",
      title: "Reaksi Redoks dan Elektrokimia",
      image: "https://via.placeholder.com/150?text=Reaksi+Redoks", // Ganti dengan gambar yang sesuai
    },
    {
      path: "/program-pembelajaran/kimia-unsur",
      title: "Kimia Unsur",
      image: "https://via.placeholder.com/150?text=Kimia+Unsur", // Ganti dengan gambar yang sesuai
    },
    {
      path: "/program-pembelajaran/senyawa-karbon",
      title: "Senyawa Karbon",
      image: "https://via.placeholder.com/150?text=Senyawa+Karbon", // Ganti dengan gambar yang sesuai
    },
    {
      path: "/program-pembelajaran/benzena",
      title: "Benzena dan Turunannya",
      image: "https://via.placeholder.com/150?text=Benzena", // Ganti dengan gambar yang sesuai
    },
  ];

  return (
    <div className="programs-gallery">
      {programs.map((program, index) => (
        <div key={index} className="program-item">
          <Link to={program.path} onClick={onLinkClick}>
            <img src={program.image} alt={program.title} className="program-image" />
            <div className="program-title">{program.title}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProgramPembelajaran;
