import React from 'react';
import './InfoLayanan.css'; // Pastikan file CSS ini ada

function InfoLayanan() {
  return (
    <div className="info-layanan-container">
      <div className="info-header">
        <h2>Info Layanan</h2>
        <p>Website ini menyediakan berbagai layanan pendidikan untuk membantu siswa belajar Kimia Kelas 12:</p>
      </div>

      <ul className="info-list">
        <li className="info-item">
          <i className="fas fa-book icon"></i> Materi Pembelajaran Kimia Kelas 12
        </li>
        <li className="info-item">
          <i className="fas fa-pencil-alt icon"></i> Latihan Soal dan Pembahasan
        </li>
        <li className="info-item">
          <i className="fas fa-chalkboard-teacher icon"></i> Bimbingan Online
        </li>
      </ul>

      <p className="info-footer">
        Jika ada pertanyaan lebih lanjut, silakan hubungi kami melalui halaman <a href="/kirim-pesan" className="contact-link">kirim pesan</a>.
      </p>
    </div>
  );
}

export default InfoLayanan;
