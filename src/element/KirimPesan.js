import React, { useState } from 'react';
import './KirimPesan.css';

function KirimPesan() {
  const [pesan, setPesan] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !pesan) {
      setError('Harap isi email dan pesan Anda sebelum mengirim.');
      return;
    }

    setSuccess(true);
    setError('');
    setPesan('');
    setEmail('');
    setTimeout(() => setSuccess(false), 2000); 
  };

  return (
    <div className="kirim-pesan-container">
      <h2>Kirim Pesan</h2>
      <form onSubmit={handleSubmit} className="kirim-pesan-form">
        <div className="form-group">
          <label htmlFor="email">Email Anda</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan email Anda..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pesan">Pesan Anda</label>
          <textarea
            id="pesan"
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            placeholder="Tuliskan pesan Anda di sini..."
            rows="5"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">Pesan Anda telah berhasil dikirim!</p>}
        <button type="submit" className="submit-button">Kirim</button>
      </form>
    </div>
  );
}

export default KirimPesan;
