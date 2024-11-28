import React from 'react';
import './TabelPelarut.css'; 

function TabelPelarut() {
  const data = [
    { pelarut: 'Air', titikDidih: 100, kb: 0.52 },
    { pelarut: 'Aseton', titikDidih: 56.5, kb: 1.72 },
    { pelarut: 'Etanol', titikDidih: 78.4, kb: 1.2 },
    { pelarut: 'Benzena', titikDidih: 80.1, kb: 2.52 },
    { pelarut: 'Etil eter', titikDidih: 34.6, kb: 2.11 },
    { pelarut: 'Asam asetat', titikDidih: 118.3, kb: 3.07 },
    { pelarut: 'Kloroform', titikDidih: 61.2, kb: 3.62 },
  ];

  return (
    <div className="tabel-container">
      <table>
        <thead>
          <tr>
            <th>Pelarut</th>
            <th>Titik Didih (°C)</th>
            <th>Kb (°C m-1)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.pelarut}>
              <td>{item.pelarut}</td>
              <td>{item.titikDidih}</td>
              <td>{item.kb}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabelPelarut;