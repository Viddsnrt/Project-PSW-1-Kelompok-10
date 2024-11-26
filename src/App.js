import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './element/Home';
import Footer from './element/Footer';
import OurServices from './element/OurServices';
import KirimPesan from './element/KirimPesan';
import SifatKoligatif from './materi/SifatKoligatif';
import ReaksiRedoks from './materi/ReaksiRedoks';
import KimiaUnsur from './materi/KimiaUnsur';
import SenyawaKarbon from './materi/SenyawaKarbon';
import Benzena from './materi/Benzena';
import Login from './element/Login';
import ForgotPassword from './element/ForgotPassword';
import ResetPassword from './element/ResetPassword';
import Register from './element/Register';
import Quiz from './materi/Quiz';
import SimulasiLaboratorium from './SimulasiLaboratorium'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourservices" element={<OurServices/>} />
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
        <Route path="/quiz" element={<Quiz />} />
        <Route path ="/Footer" element={<Footer />} />
        <Route path="/simulasi-laboratorium" element={<SimulasiLaboratorium />} />
      </Routes>
    </Router>
  );
}

export default App;