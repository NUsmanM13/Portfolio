import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import MobileMenu from './MobileMenu'; // Yangi mobil menyuni import qilamiz

// Gradient aylanishi uchun animatsiya (o'zgarishsiz)
const rotateGradient = keyframes`
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
`;

const Header = () => {
  // Mobil menyu holatini saqlash uchun state
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <Logo to="/">NZBKV1</Logo>
        
        {/* Katta ekranlar uchun menyu */}
        <DesktopNav>
          <StyledNavLink to="/" end>
            <NavLinkContent>Bosh Sahifa</NavLinkContent>
          </StyledNavLink>
          <StyledNavLink to="/about">
            <NavLinkContent>Men Haqimda</NavLinkContent>
          </StyledNavLink>
          <StyledNavLink to="/projects">
            <NavLinkContent>Loyihalar</NavLinkContent>
          </StyledNavLink>
          <StyledNavLink to="/contact">
            <NavLinkContent>Bog'lanish</NavLinkContent>
          </StyledNavLink>
        </DesktopNav>

        {/* Kichik ekranlar uchun gamburger tugmasi */}
        <HamburgerButton onClick={toggleMobileMenu}>
          <Line isOpen={isMobileMenuOpen} />
          <Line isOpen={isMobileMenuOpen} />
          <Line isOpen={isMobileMenuOpen} />
        </HamburgerButton>

      </HeaderContainer>
      
      {/* Mobil menyuning o'zi */}
      <MobileMenu isOpen={isMobileMenuOpen} closeMenu={closeMobileMenu} />
    </>
  );
};

// Uslublar
const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 0 50px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(11, 22, 40, 0.75);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(164, 145, 217, 0.2);
  z-index: 1000;

  @media (max-width: 992px) { // Breakpoint'ni biroz kattalashtirdik
    padding: 0 25px;
  }
`;

const Logo = styled(NavLink)`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  font-weight: 900;
  color: #e0e0ff;
  text-shadow: 0 0 8px rgba(224, 224, 255, 0.7);
  transition: all 0.3s ease;
  z-index: 1001; // Logotip gamburger ustida turishi uchun

  &:hover {
    color: #64ffda;
    text-shadow: 0 0 15px #64ffda;
  }
`;

// Desktop menyusi
const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 992px) {
    display: none; // Kichik ekranlarda yashiriladi
  }
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  color: #a8b2d1;
  background: transparent;
  transition: color 0.3s ease;
  
  &:hover, &.active { color: #ffffff; }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    padding-bottom: 150%;
    background: conic-gradient(transparent, #a491d9, #64ffda, transparent 30%);
    transition: opacity 0.4s ease;
    opacity: 0;
    z-index: 1;
  }

  &:hover::before, &.active::before {
    opacity: 1;
    animation: ${rotateGradient} 4s linear infinite;
  }
`;

const NavLinkContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 10px 20px;
  background-color: rgba(11, 22, 40, 0.75);
  margin: 2px;
  border-radius: 6px;
  font-family: 'Exo 2', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

// Gamburger tugmasi
const HamburgerButton = styled.button`
  display: none; // Boshida ko'rinmaydi
  width: 30px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 992px) {
    display: flex; // Kichik ekranlarda paydo bo'ladi
  }
`;

const Line = styled.div`
  width: 30px;
  height: 3px;
  background-color: #e0e0ff;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  &:nth-child(1) {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg) translate(7px, 7px)' : 'rotate(0)')};
  }
  &:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  }
  &:nth-child(3) {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg) translate(8px, -8px)' : 'rotate(0)')};
  }
`;

export default Header;