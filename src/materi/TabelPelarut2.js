import React from 'react';
import './TabelPelarut.css';

function TabelPelarut2() {
  const data = [
    { pelarut: 'Aseton', titikBeku: -95.35, kf: 2.40 },
    { pelarut: 'Benzena', titikBeku: 5.45, kf: 5.12 },
    { pelarut: 'Kamfer', titikBeku: 179.8, kf: 39.7 },
    { pelarut: 'Karbon tetraklorida', titikBeku: -23, kf: 29.8 },
    { pelarut: 'Sikloheksana', titikBeku: 6.5, kf: 20.1 },
    { pelarut: 'Naftalena', titikBeku: 80.5, kf: 6.94 },
    { pelarut: 'Fenol', titikBeku: 43, kf: 7.27 },
    { pelarut: 'Air', titikBeku: 0, kf: 1.86 },
  ];

  return (
    <div className="tabel-container">
      <table>
        <thead>
          <tr>
            <th>Pelarut</th>
            <th>Titik Beku (°C)</th>
            <th>Kf (°C m⁻¹)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.pelarut}>
              <td>{item.pelarut}</td>
              <td>{item.titikBeku}</td>
              <td>{item.kf}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabelPelarut2;
