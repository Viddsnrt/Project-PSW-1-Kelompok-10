import React, { useState } from 'react';

function KirimPesan() {
  const [pesan, setPesan] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pesan Anda: "${pesan}" telah dikirim`);
    setPesan('');
  };

  return (
    <div>
      <h2>Kirim Pesan</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          placeholder="Tuliskan pesan Anda di sini..."
          rows="5"
          cols="40"
        />
        <br />
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
}

export default KirimPesan;
