import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

// Animatsiya variantlari (o'zgarishsiz)
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

// Sahifa komponenti (o'zgarishsiz)
const HomePage = () => {
  return (
    <HomePageContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <IntroText>ORBITAGA XUSH KELIBSIZ. MEN</IntroText>
      <MainHeading>Usman</MainHeading> {/* Ismingizni o'zgartirdim */}
      <Tagline>
        <Typewriter
          options={{
            strings: [
              "Raqamli olamlar yarataman.",
              "G'oyalarni kodga aylantiraman.",
              "Nol va birliklardan Koinot quraman."
            ],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
          }}
        />
      </Tagline>
      <Description>
        Men — veb-texnologiyalarga ixlosmand bo'lgan dasturchiman. Mening vazifam — foydalanuvchilar uchun nafaqat funksional, balki estetik zavq beradigan, unutilmas raqamli tajribalar yaratish.
      </Description>
      <CTAButton to="/projects"  whileHover={{ scale: 1.05, boxShadow: "0 0 25px #64ffda" }} whileTap={{ scale: 0.95 }}>
        LOYIHALARNI KO'RISH
      </CTAButton>
    </HomePageContainer>
  );
};

// Styled-components yordamida uslublar (ASOSIY O'ZGARISHLAR SHU YERDA)
const HomePageContainer = styled(motion.section)` /* div o'rniga section tegi */
  display: flex;
  padding-top:100px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* Kontentni chap chekkaga tekislash */
  
  /* Bu sahifani Header va Footer orasida to'liq egallashini ta'minlaydi */
  min-height: calc(100vh - 160px); /* 100vh - (Header balandligi + Footer balandligi) */
  
  /* Kontent chetga yopishib qolmasligi uchun */
  width: 100%;
  max-width: 1100px; /* Kontent juda kengayib ketmasligi uchun */
  margin: 0 auto; /* Markazga joylash */
  padding: 20px 50px; /* Yon tarafdan bo'sh joy */

  @media (max-width: 768px) {
    min-height: calc(100vh - 140px); /* Mobil uchun balandlik (Header/Footer kichikroq bo'lsa) */
    padding: 0 25px;
    align-items: center; /* Mobil qurilmada kontentni markazga keltirish */
    text-align: center; /* Mobil qurilmada matnlarni markazga keltirish */
  }
`;

const IntroText = styled.p`
  font-family: 'Orbitron', sans-serif;
  color: #a491d9;
  font-size: 1.2rem;
  margin-bottom: 20px;
  letter-spacing: 2px;
`;

const MainHeading = styled.h1`
  font-size: clamp(2.5rem, 8vw, 6rem); /* Responsive shrift o'lchami */
  font-weight: 900;
  color: #e0e0ff;
  line-height: 1.1;
  margin-bottom: 10px;
  text-shadow: 0 0 15px rgba(224, 224, 255, 0.5);
`;

const Tagline = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2.5rem); /* Responsive shrift o'lchami */
  font-weight: 700;
  color: #8892b0;
  margin-bottom: 30px;
  min-height: 100px;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #a8b2d1;
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const CTAButton = styled(motion(NavLink))`
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1.5px;
  color: #64ffda; // Boshlang'ich matn rangi
  background-color: transparent;
  border: 2px solid #64ffda;
  padding: 18px 35px;
  border-radius: 5px;
  cursor: pointer;
  
  // Konteyner va animatsiya uchun zarur stillar
  position: relative;
  z-index: 1;
  overflow: hidden; // Psevdo-element chegaradan chiqib ketmasligi uchun
  transition: color 0.4s ease-out; // Matn rangining silliq o'zgarishi

  // Chapdan to'lib keluvchi fonni yaratuvchi psevdo-element
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0; // Boshlang'ich kenglik 0
    height: 100%;
    background-color: #64ffda; // To'ldiruvchi effekt rangi
    transition: width 0.4s ease-out; // Fon to'lish animatsiyasi
    z-index: -1; // Matn orqasida turishi uchun
  }

  // Sichqoncha ustiga borganda...
  &:hover {
    color: #0a192f; // Matn rangi qorong'u rangga o'zgaradi

    // ...::before psevdo-elementining kengligi 100% bo'ladi
    &::before {
      width: 100%;
    }
  }
`;

export default HomePage;