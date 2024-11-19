import React from 'react';
import './layanan.css'; 

function InfoLayanan() {
  return (
    <div className="info-layanan-container">
      <div className="info-header">
        <h2>Info Layanan</h2>
        <p>Website ini menyediakan berbagai layanan pendidikan untuk membantu siswa belajar Kimia Kelas 12:</p>
      </div>

      <ul className="info-list">
        <li className="info-item">
          <i className="fas fa-book icon"></i> <strong>Materi Pembelajaran Kimia Kelas 12</strong> - Materi lengkap dan terstruktur untuk membantu pemahaman konsep dasar Kimia.
        </li>
        <li className="info-item">
          <i className="fas fa-pencil-alt icon"></i> <strong>Latihan Soal dan Pembahasan</strong> - Soal latihan dengan pembahasan mendalam untuk meningkatkan kemampuan siswa dalam ujian Kimia.
        </li>
        <li className="info-item">
          <i className="fas fa-video icon"></i> <strong>Video Pembelajaran</strong> - Akses video pembelajaran untuk memahami topik-topik Kimia dengan lebih mudah dan interaktif.
        </li>
        <li className="info-item">
          <i className="fas fa-chalkboard-teacher icon"></i> <strong>Bimbingan Online</strong> - Sesi bimbingan online untuk bantuan langsung dari pengajar dan tutor Kimia.
        </li>
        <li className="info-item">
          <i className="fas fa-link icon"></i> <strong>Link Pembelajaran Terkait</strong> - Akses ke situs lain yang menyediakan sumber belajar tambahan yang relevan.
        </li>
        <li className="info-item">
          <i className="fas fa-users icon"></i> <strong>Forum Diskusi</strong> - Bergabunglah dengan forum diskusi untuk berbagi pengetahuan dan bertanya dengan sesama siswa.
        </li>
      </ul>

      <p className="info-footer">
        Jika ada pertanyaan lebih lanjut, silakan hubungi kami melalui halaman <a href="/kirim-pesan" className="contact-link">kirim pesan</a>.
      </p>

      <div className="info-footer-additional">
        <p>Akses ke seluruh materi dapat ditemukan di <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="resource-link">website pembelajaran</a> kami yang telah dihosting.</p>
      </div>
    </div>
  );
}

export default InfoLayanan;
