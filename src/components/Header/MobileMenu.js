import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

// Butun ekranni qoplovchi qobiq uchun animatsiyalar
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3, delay: 0.5 } }
};

// Menyu bandlari uchun animatsiyalar (stagger effekti bilan)
const linkContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const linkVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const MobileMenu = ({ isOpen, closeMenu }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <NavContainer
            variants={linkContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={linkVariants}>
              <StyledNavLink to="/" end onClick={closeMenu}>Bosh Sahifa</StyledNavLink>
            </motion.div>
            <motion.div variants={linkVariants}>
              <StyledNavLink to="/about" onClick={closeMenu}>Men Haqimda</StyledNavLink>
            </motion.div>
            <motion.div variants={linkVariants}>
              <StyledNavLink to="/projects" onClick={closeMenu}>Loyihalar</StyledNavLink>
            </motion.div>
            <motion.div variants={linkVariants}>
              <StyledNavLink to="/contact" onClick={closeMenu}>Bog'lanish</StyledNavLink>
            </motion.div>
          </NavContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

// Uslublar
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 4, 17, 0.95);
  backdrop-filter: blur(8px);
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavContainer = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const StyledNavLink = styled(NavLink)`
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem; /* Katta, o'qishga oson shrift */
  color: #a8b2d1;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: color 0.3s ease;
  
  &:hover, &.active {
    color: #64ffda;
  }
`;

export default MobileMenu;