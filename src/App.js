import React, { useCallback, useState, useEffect } from 'react'; // useState va useEffect import qilindi
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import styled from 'styled-components';
import { particlesOptions } from './particlesConfig';

// Komponentlarni import qilamiz
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader.js'; // <-- LOADER IMPORT QILINDI

// Sahifalarni import qilamiz
import HomePage from './pages/Home/Home';
import AboutPage from './pages/About/About';
import ProjectsPage from './pages/Projects/Projects';
import ContactPage from './pages/Contact/Contact';
import NotFoundPage from './pages/NotFound/NotFoundPage';

function App() {
  // 1. Yuklanish holati (state) yaratildi. Boshlang'ich qiymati 'true'.
  const [loading, setLoading] = useState(true);

  // 2. Sayt ilk yuklanganda bir marta ishlaydigan effekt
  useEffect(() => {
    // Loader 2.5 soniya ko'rinib turadi, so'ngra sayt ochiladi.
    const timer = setTimeout(() => {
      setLoading(false); // Holatni 'false'ga o'zgartirib, loader'ni yashiramiz
    }, 2500); // 2500 millisekund = 2.5 soniya

    // Komponent ishini yakunlaganda taymerni tozalash
    return () => clearTimeout(timer);
  }, []); // [] bo'sh massiv bu effekt faqat bir marta ishlashini ta'minlaydi

  const particlesInit = useCallback(async (engine) => {
    // Bu funksiya endi 'loadSlim'ni chaqiradi
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Bu funksiya zarralar chizib bo'lingandan so'ng ishlaydi
  }, []);

  if (loading) {
    return <Loader />;
  }


  return (
    <BrowserRouter>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
      />
      
      <Header />
      
      <AppContent>
        <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/about" element={<AboutPage />} />
           <Route path="/projects" element={<ProjectsPage />} />
           <Route path="/contact" element={<ContactPage />} />
           <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppContent>

      <Footer />
    </BrowserRouter>
  );
}

// Asosiy kontent uchun oddiy qobiq
const AppContent = styled.main`
  position: relative;
  z-index: 5;
  /* Bu yerda margin yoki padding qo'shish shart emas, 
     har bir sahifa o'zining padding'ini o'zi boshqaradi */
`;

export default App;