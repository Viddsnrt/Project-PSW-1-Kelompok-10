import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './element/Home';
import ProgramPembelajaran from './element/ProgramPembelajaran';
import Footer from './element/Footer';
import Forum from './element/Forum';
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
import SimulasiLaboratorium from './materi/SimulasiLaboratorium';
import Community from './element/Community';
import Makromolekul from './materi/Makromolekul';
import Webinars from './element/Webinars';
import Registernow from './element/Registernow';
import AboutUs from './element/AboutUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/kirim-pesan" element={<KirimPesan />} />
        <Route path="/program-pembelajaran/sifat-koligatif" element={<SifatKoligatif />} />
        <Route path="/program-pembelajaran/reaksi-redoks" element={<ReaksiRedoks />} />
        <Route path="/program-pembelajaran/kimia-unsur" element={<KimiaUnsur />} />
        <Route path="/program-pembelajaran/senyawa-karbon" element={<SenyawaKarbon />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/program-pembelajaran/benzena" element={<Benzena />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/program-pembelajaran" element={<ProgramPembelajaran />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/simulasilaboratorium" element={<SimulasiLaboratorium />} />
        <Route path="/community" element={<Community />} />
        <Route path="/Makromolekul" element={<Makromolekul />} />
        <Route path="/webinars" element={<Webinars />} />
        <Route path="/Registernow" element={<Registernow />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
