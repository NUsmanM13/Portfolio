import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// import myAvatar from '../../assets/images/my-avatar.png'; // Rasmingiz uchun

// Animatsiya variantlari
const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

// Hologramma uchun "scanline" effekti
const scanline = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(280px); }
`;

// "Sayyoralarning" mayin harakati uchun animatsiya
const float = keyframes`
  0% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-15px) translateX(5px); }
  100% { transform: translateY(0px) translateX(0px); }
`;

// Ko'nikmalar ro'yxati
const skills = [
  { name: 'React', size: 140 }, { name: 'JavaScript', size: 120 }, { name: 'Node.js', size: 110 },
  { name: 'HTML5', size: 90 }, { name: 'CSS3', size: 100 }, { name: 'Styled-Components', size: 130 },
  { name: 'Framer Motion', size: 120 }, { name: 'Git', size: 80 }, { name: 'Figma', size: 100 },
  { name: 'Python', size: 110 }, { name: 'Next.js', size: 130 }, { name: 'MongoDB', size: 90 },
];

const AboutPage = () => {
  return (
    <AboutPageContainer variants={pageVariants} initial="hidden" animate="visible">
      {/* 1-Qism: Astronavt Kundaligi */}
      <motion.section variants={sectionVariants}>
        <SectionTitle><span>02.</span> Missiya Profili</SectionTitle>
        <AboutContent>
          <TextColumn>
            <p>
              Salom, men <strong>Usman</strong>. Kod galaktikasidagi bir tadqiqotchi. Mening asosiy missiyam — g'oyalar va texnologiyalar o'rtasida ko'prik qurish, mavhumlikdan aniq va foydali mahsulotlar yaratish. Har bir loyiha men uchun yangi, noma'lum yulduz tizimini kashf etish bilan barobar.
            </p>
            <p>
              Sayohatim yoshlikdagi oddiy qiziqishdan boshlanib, bugunga kelib professional ehtirosga aylandi. Men doimiy ravishda o'z bilimlarim orbitasini kengaytirishga va koinotning eng chekka burchaklaridagi muammolarga yechim topishga harakat qilaman.
            </p>
          </TextColumn>
          <HologramColumn>
            <HologramContainer>
              <HologramProjection>
                {/* <img src={myAvatar} alt="Astronavt Niyozbek" /> */}
                <ImagePlaceholder>NZBKV</ImagePlaceholder>
              </HologramProjection>
              <HologramBase />
            </HologramContainer>
          </HologramColumn>
        </AboutContent>
      </motion.section>

      {/* 2-Qism: Texnologiyalar Galaktikasi */}
      <motion.section variants={sectionVariants}>
        <SectionTitle><span>//</span> Texnologik Arsenal</SectionTitle>
        <SkillsGalaxyContainer>
          {skills.map((skill, index) => (
            <SkillOrb key={index} $size={skill.size} $index={index}>
              <span>{skill.name}</span>
            </SkillOrb>
          ))}
        </SkillsGalaxyContainer>
      </motion.section>
    </AboutPageContainer>
  );
};

// === USLUBLAR (STYLED COMPONENTS) ===

const AboutPageContainer = styled(motion.main)`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 50px;

  @media (max-width: 768px) {
    padding: 60px 25px;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 4vw, 1.8rem);
  font-weight: 700;
  color: #e0e0ff;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  letter-spacing: 1px;

  span {
    color: #64ffda;
    margin-right: 15px;
    font-family: 'Exo 2', sans-serif;
  }
`;

const AboutContent = styled.article`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 50px;
  align-items: center;
  margin-bottom: 100px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 80px;
  }
`;

const TextColumn = styled.div`
  p {
    color: #a8b2d1;
    line-height: 1.8;
    margin-bottom: 20px;
    font-size: 1.1rem;
    strong {
      color: #cbbfff;
      font-weight: bold;
    }
  }
`;

const HologramColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HologramContainer = styled.div`
  position: relative;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HologramProjection = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  background: linear-gradient(0deg, rgba(100, 255, 218, 0.2), transparent);
  border-bottom: 2px solid #64ffda;
  perspective: 1000px;
  
  img, div {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: rotateX(20deg) scale(0.9);
    filter: grayscale(50%) brightness(1.1) contrast(1.1);
    opacity: 0.8;
    mix-blend-mode: screen;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, transparent, rgba(164, 145, 217, 0.2), transparent);
    animation: ${scanline} 8s infinite linear;
  }
`;

const ImagePlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  font-weight: 900;
  font-family: 'Orbitron', sans-serif;
  color: #e0e0ff;
`;

const HologramBase = styled.div`
  width: 150px;
  height: 20px;
  background: radial-gradient(ellipse at center, #4f4fce 0%, #172a45 80%);
  border-radius: 50% / 100%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow: 0 5px 30px #4f4fce;
`;

const SkillsGalaxyContainer = styled.div`
  position: relative;
  width: 100%;
  height: 450px; /* Konteyner balandligi */
  
  @media (max-width: 768px) {
    height: 600px; /* Mobil uchun balandlikni oshiramiz */
  }
`;

const SkillOrb = styled.div`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: transparent; /* Boshida matn ko'rinmaydi */
  background: radial-gradient(circle at 30% 30%, #a491d9, #112240 80%);
  box-shadow: 0 0 10px 2px rgba(164, 145, 217, 0.4);
  opacity: 0.7;
  animation: ${float} 8s infinite ease-in-out;
  animation-delay: ${({ $index }) => $index * 0.5}s;
  transition: all 0.4s ease;
  cursor: pointer;

  span {
    font-weight: bold;
    font-size: 1rem;
    transition: all 0.4s ease;
  }

  &:hover {
    transform: scale(1.2);
    box-shadow: 0 0 30px 10px rgba(100, 255, 218, 0.5);
    opacity: 1;
    color: #ffffff;
    animation-play-state: paused;
  }

  /* Har bir "sayyorani" alohida joylashtiramiz */
  &:nth-of-type(1) { top: 5%; left: 15%; }
  &:nth-of-type(2) { top: 60%; left: 10%; }
  &:nth-of-type(3) { top: 20%; left: 80%; }
  &:nth-of-type(4) { top: 75%; left: 90%; }
  &:nth-of-type(5) { top: 80%; left: 40%; }
  &:nth-of-type(6) { top: 10%; left: 45%; }
  &:nth-of-type(7) { top: 40%; left: 55%; }
  &:nth-of-type(8) { top: 85%; left: 70%; }
  &:nth-of-type(9) { top: 50%; left: 25%; }
  &:nth-of-type(10) { top: 5%; left: 95%; }
  &:nth-of-type(11) { top: 30%; left: 5%; }
  &:nth-of-type(12) { top: 65%; left: 50%; }
`;

export default AboutPage;