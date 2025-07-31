// src/pages/NotFound/NotFoundPage.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Animatsiya variantlari (boshqa sahifalardagi kabi)
const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

// Sahifa komponenti
const NotFoundPage = () => {
  return (
    <NotFoundContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>Koinotda adashib qoldingiz shekilli.</ErrorMessage>
      <ErrorDescription>
        Siz izlayotgan sahifa mavjud emas yoki boshqa manzilga ko'chirilgan bo'lishi mumkin.
      </ErrorDescription>
      <HomeButton to="/">
        BOSH SAHIFAGA QAYTISH
      </HomeButton>
    </NotFoundContainer>
  );
};

// Styled-components yordamida uslublar
const NotFoundContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* Sahifani to'liq egallashi uchun */
  min-height: calc(100vh - 160px); 
  width: 100%;
  padding: 20px;
`;

const ErrorCode = styled.h1`
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(6rem, 25vw, 12rem);
  font-weight: 900;
  color: #a491d9;
  line-height: 1;
  text-shadow: 0 0 15px rgba(164, 145, 217, 0.4), 0 0 30px rgba(164, 145, 217, 0.2);
`;

const ErrorMessage = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 700;
  color: #e0e0ff;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const ErrorDescription = styled.p`
  font-size: 1.1rem;
  color: #a8b2d1;
  max-width: 500px;
  margin-bottom: 40px;
`;

const HomeButton = styled(NavLink)`
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1.5px;
  color: #64ffda;
  background-color: transparent;
  border: 2px solid #64ffda;
  padding: 16px 30px;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: color 0.4s ease-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #64ffda;
    transition: width 0.4s ease-out;
    z-index: -1;
  }

  &:hover {
    color: #0a192f;
    &::before {
      width: 100%;
    }
  }
`;

export default NotFoundPage;