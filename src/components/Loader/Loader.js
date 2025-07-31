import React from 'react';
import styled, { keyframes } from 'styled-components';

// ----- ANIMATSIYALAR (o'zgarishsiz) -----

// 1. Asosiy loaderning silliq paydo bo'lishi
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// 2. Gradient chiziqlarning aylanishi
const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// 3. Matndagi gradientning silliq harakati
const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// 4. Matnning "yonib-o'chish" (pulsatsiya) effekti
const pulse = keyframes`
  0%, 100% {
    opacity: 0.8;
    text-shadow: 0 0 12px #64ffda, 0 0 20px #a491d9;
  }
  50% {
    opacity: 1;
    text-shadow: 0 0 20px #64ffda, 0 0 35px #a491d9;
  }
`;


// ----- STIL BERILGAN KOMPONENTLAR -----

// Butun sahifani egallovchi asosiy qobiq
const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  /* --- ASOSIY O'ZGARISH --- */
  background-color: #000000; // Fon to'liq qora rangga o'zgartirildi
  
  z-index: 9999;
  animation: ${fadeIn} 0.8s ease-in-out;
`;

// Aylanuvchi elementlar va yozuv uchun markaziy konteyner
const SpinnerContainer = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    transform: scale(0.75);
  }
`;

// Har bir aylanuvchi gradient chiziq uchun stil
const GradientRing = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  
  background: conic-gradient(
    from ${props => props.startAngle || '0'}deg,
    transparent 0%,
    transparent ${props => props.gap || 60}%,
    ${props => props.color1} ${props => (props.gap || 60) + 10}%,
    ${props => props.color2} 100%
  );
  
  animation: ${rotate} ${props => props.duration}s linear infinite;
  animation-direction: ${props => props.direction || 'normal'};
`;

// Markazdagi gradientli va pulsatsiya qiluvchi yozuv
const LogoText = styled.h1`
  font-family: 'Orbitron', sans-serif;
  font-size: 2.8rem;
  font-weight: 900;
  letter-spacing: 1.5px;
  z-index: 10;

  background: linear-gradient(90deg, #64ffda, #a491d9, #e0e0ff, #64ffda);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: 
    ${gradientFlow} 3s ease-in-out infinite,
    ${pulse} 2.5s ease-in-out infinite;
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <SpinnerContainer>
        {/* Bir nechta har xil parametrli gradient chiziqlar */}
        <GradientRing 
          size={250} 
          duration={12} 
          color1="#a491d9" 
          color2="rgba(164, 145, 217, 0)" 
          gap={70} 
        />
        <GradientRing 
          size={250} 
          duration={15} 
          direction="reverse" 
          startAngle={180}
          color1="#64ffda" 
          color2="rgba(100, 255, 218, 0)"
          gap={80}
        />
        <GradientRing 
          size={180} 
          duration={10} 
          color1="#e0e0ff" 
          color2="rgba(224, 224, 255, 0)" 
          gap={60}
        />

        <LogoText>nzbkv</LogoText>
      </SpinnerContainer>
    </LoaderWrapper>
  );
};

export default Loader;