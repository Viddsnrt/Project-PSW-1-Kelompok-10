import React from "react";
import { NavLink } from "react-router-dom";
import "./ProgramPembelajaran.css";
import { FaFlask, FaBatteryHalf, FaCubes, FaAtom, FaBurn } from "react-icons/fa";

function ProgramPembelajaran() {
  const programs = [
    {
      path: "/program-pembelajaran/sifat-koligatif",
      title: "Sifat Koligatif Larutan",
      icon: <FaFlask />,
    },
    {
      path: "/program-pembelajaran/reaksi-redoks",
      title: "Reaksi Redoks dan Elektrokimia",
      icon: <FaBatteryHalf />,
    },
    {
      path: "/program-pembelajaran/kimia-unsur",
      title: "Kimia Unsur",
      icon: <FaCubes />,
    },
    {
      path: "/program-pembelajaran/senyawa-karbon",
      title: "Senyawa Karbon",
      icon: <FaAtom />,
    },
    {
      path: "/program-pembelajaran/benzena",
      title: "Benzena dan Turunannya",
      icon: <FaBurn />,
    },
  ];

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Program Pembelajaran</h2>
      <ul className="sidebar-menu">
        {programs.map((program, index) => (
          <li key={index} className="sidebar-item">
            <NavLink
              to={program.path}
              className="sidebar-link"
              activeClassName="active"
            >
              <span className="sidebar-icon">{program.icon}</span>
              <span className="sidebar-text">{program.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProgramPembelajaran;
