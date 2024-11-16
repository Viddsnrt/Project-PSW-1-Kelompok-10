import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import Menu from './Menu';
import InfoLayanan from './InfoLayanan';
import KirimPesan from './KirimPesan';
import SifatKoligatif from './SifatKoligatif';
import ReaksiRedoks from './ReaksiRedoks';
import KimiaUnsur from './KimiaUnsur';
import SenyawaKarbon from './SenyawaKarbon';
import Benzena from './Benzena';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import Register from './Register';
import Quiz from './Quiz';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/info-layanan" element={<InfoLayanan />} />
        <Route path="/kirim-pesan" element={<KirimPesan />} />
        <Route path="/program-pembelajaran/sifat-koligatif" element={<SifatKoligatif />} />
        <Route path="/program-pembelajaran/reaksi-redoks" element={<ReaksiRedoks />} />
        <Route path="/program-pembelajaran/kimia-unsur" element={<KimiaUnsur />} />
        <Route path="/program-pembelajaran/senyawa-karbon" element={<SenyawaKarbon />} />
        <Route path="/program-pembelajaran/benzena" element={<Benzena />} />
        <Route path="/program-pembelajaran/quiz" element={<Quiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
