import React from 'react';
import './TabelPelarut.css'; 

function TabelMoliri() {
  const data = [
    { Fitur: 'Dasar', Molalitas: 'Massa pelarut', Molaritas: 'Volume larutan' },
    { Fitur: 'Satuan', Molalitas: 'mol/kg atau molal', Molaritas: 'mol/L atau molar' },
    { Fitur: 'Pengaruh suhu', Molalitas: 'Tidak terpengaruh', Molaritas: 'Terpengaruh' },
    { Fitur: 'Pengaruuh tekanan', Molalitas: 'Tidak terpengaruh', Molaritas: 'Terpengaruh' },
  ];

  return (
    <div className="tabel-container">
      <table>
        <thead>
          <tr>
            <th>Fitur</th>
            <th>Molalitas (m)</th>
            <th>Molaritas (M)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.Fitur}>
              <td>{item.Fitur}</td>
              <td>{item.Molalitas}</td>
              <td>{item.Molaritas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabelMoliri;