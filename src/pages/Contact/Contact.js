import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaTelegram, FaWhatsapp, FaInstagram } from 'react-icons/fa';

// Animatsiya variantlari
const pageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: 'spring', stiffness: 100 } },
};

// Orqa fondagi mayin pulsatsiya uchun animatsiya
const pulseBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Ijtimoiy tarmoqlar ro'yxati (o'zingiznikiga moslab o'zgartiring)
const socialLinks = [
  {
    name: 'GitHub',
    icon: <FaGithub />,
    url: 'https://github.com/',
    color: '#e0e0ff',
  },
  {
    name: 'Telegram',
    icon: <FaTelegram />,
    url: 'https://t.me/usman_niyazbekov',
    color: '#2AABEE',
  },
  {
    name: 'Whatsapp',
    icon: <FaWhatsapp />,
    url: 'https://wa.me/998995656497',
    color: '#0A66C2',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    url: 'https://instagram.com/usman_niyazbekov',
    color: '#E4405F',
  },
];

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <ContentWrapper variants={pageVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants}>
          <SectionTitle><span>04.</span> Transmissiyani Yo'naltirish</SectionTitle>
          <SubTitle>
            G'oyalarni muhokama qilish, hamkorlik qilish yoki shunchaki salomlashish uchun eng qulay kanalni tanlang. Men har doim aloqadaman.
          </SubTitle>
        </motion.div>
        
        <SocialLinksGrid>
          {socialLinks.map((link, index) => (
            <SocialCard
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              $hoverColor={link.color}
            >
              <IconWrapper>{link.icon}</IconWrapper>
              <LinkName>{link.name}</LinkName>
            </SocialCard>
          ))}
        </SocialLinksGrid>

        <motion.div variants={itemVariants}>
            <EmailLink href="mailto:niyazbekovusmon@gmail.com">
                niyazbekovusmon@gmail.com
            </EmailLink>
        </motion.div>

      </ContentWrapper>
    </ContactPageContainer>
  );
};

// === USLUBLAR (STYLED COMPONENTS) ===

const ContactPageContainer = styled.main`
  width: 100%;
  min-height: calc(100vh - 160px); /* Header va Footer orasini to'ldirish uchun */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 50px;
  background: radial-gradient(ellipse at center, rgba(17, 34, 64, 0.5) 0%, #000411 70%);
`;

const ContentWrapper = styled(motion.div)`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 4vw, 1.8rem);
  font-weight: 700;
  color: #e0e0ff;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  
  span {
    color: #64ffda;
    margin-right: 15px;
    font-family: 'Exo 2', sans-serif;
  }
`;

const SubTitle = styled.p`
  color: #a8b2d1;
  max-width: 600px;
  margin-bottom: 60px;
  line-height: 1.6;
`;

const SocialLinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 25px;
  width: 100%;
  margin-bottom: 60px;
`;

const SocialCard = styled(motion.a)`
  height: 180px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background: linear-gradient(145deg, rgba(23, 42, 69, 0.7), rgba(17, 34, 64, 0.7));
  border: 1px solid rgba(164, 145, 217, 0.2);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  transition: border-color 0.3s ease;
  
  &:hover {
    border-color: ${({ $hoverColor }) => $hoverColor};
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #e0e0ff;
  transition: color 0.3s ease, transform 0.3s ease;

  ${SocialCard}:hover & {
    color: ${({ $hoverColor }) => $hoverColor};
    transform: scale(1.1);
  }
`;

const LinkName = styled.span`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.1rem;
  color: #a8b2d1;
  transition: color 0.3s ease;

  ${SocialCard}:hover & {
    color: #ffffff;
  }
`;

const EmailLink = styled.a`
  font-family: 'Exo 2', sans-serif;
  font-size: 1.1rem;
  color: #8892b0;
  letter-spacing: 1.5px;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 1px;
    background-color: #64ffda;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #64ffda;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

export default ContactPage;