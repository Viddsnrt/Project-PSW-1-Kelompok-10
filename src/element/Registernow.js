import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Registernow.css";

function Registernow() {
  const location = useLocation();
  const { state } = location;

  // Tetapkan nilai default jika data tidak tersedia
  const title = state?.title || "Webinar Eksklusif";
  const date = state?.date || "23 Desember 2024";
  const speaker = state?.speaker || "Prof. John";

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="register-page">
      <h1>Daftar untuk Webinar Eksklusif Kami</h1>
      <h2>{title}</h2>
      <p>Tanggal: <strong>{date}</strong></p>
      <p>Pembicara: <strong>{speaker}</strong></p>

      {!formSubmitted ? (
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="name">Nama Lengkap</label>
            <input type="text" id="name" placeholder="Masukkan nama lengkap Anda" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Alamat Email</label>
            <input type="email" id="email" placeholder="Masukkan alamat email Anda" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Nomor Telepon</label>
            <input type="tel" id="phone" placeholder="Masukkan nomor telepon Anda" required />
          </div>
          <div className="form-group">
            <label htmlFor="organization">Organisasi/Institusi</label>
            <input
              type="text"
              id="organization"
              placeholder="Masukkan organisasi/institusi Anda (opsional)"
            />
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" required /> Saya setuju dengan syarat dan ketentuan.
            </label>
          </div>
          <button type="submit" className="submit-button">Daftar Sekarang</button>
        </form>
      ) : (
        <div className="success-message">
          <h3>Terima Kasih Telah Mendaftar!</h3>
          <p>Periksa email Anda untuk detail webinar.</p>
        </div>
      )}
    </div>
  );
}

export default Registernow;
