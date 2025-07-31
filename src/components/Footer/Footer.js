import React from 'react';
import styled from 'styled-components';
// Ikonkalarni ishlatish uchun (agar kerak bo'lsa)
// import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 30px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  position: relative;
  z-index: 10;
`;

const CopyrightText = styled.p`
  font-family: 'Exo 2', sans-serif;
  color: #8892b0;
  font-size: 0.9rem;

  a {
    color: #a491d9;
    font-weight: bold;
    &:hover {
      color: #64ffda;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <CopyrightText>
        <a href="https://nzbkv.uz/" target="_blank" rel="noopener noreferrer">nzbkv.uz</a> | 2025
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;