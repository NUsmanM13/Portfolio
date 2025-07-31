import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from './projectsData';

// Animatsiya variantlari
const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// Kartochka atrofida aylanadigan gradient uchun animatsiya
const rotateGradient = keyframes`
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
`;

const ProjectsPage = () => {
  return (
    <ProjectsPageContainer>
      <SectionTitle
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span>03.</span> Missiyalar Arxivi
      </SectionTitle>
      
      <ProjectsGrid variants={pageVariants} initial="hidden" animate="visible">
        {projects.map((project, index) => (
          <ProjectCardWrapper key={index} variants={cardVariants}>
            <ProjectCardContent>
              <IconsHeader>
                <FolderIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </FolderIcon>
                <Links>
                  {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>}
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo"><FaExternalLinkAlt /></a>}
                </Links>
              </IconsHeader>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectCardContent>
            <CardFooter>
              <TagsList>
                {project.tags.map(tag => <li key={tag}>{tag}</li>)}
              </TagsList>
            </CardFooter>
          </ProjectCardWrapper>
        ))}
      </ProjectsGrid>
    </ProjectsPageContainer>
  );
};

// === USLUBLAR (STYLED COMPONENTS) ===

const ProjectsPageContainer = styled(motion.main)`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 50px;

  @media (max-width: 768px) {
    padding: 60px 25px;
  }
`;

const SectionTitle = styled(motion.h2)`
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

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); /* Kartochka enini biroz kattalashtirdik */
  gap: 30px;
`;

// Bu tashqi qobiq. Gradientni ushlab turadi.
const ProjectCardWrapper = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  /* Bu aylanadigan gradient */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    padding-bottom: 150%;
    background: conic-gradient(
      transparent,
      rgba(164, 145, 217, 0.8), /* Ranglarni yorqinroq qildik */
      rgba(100, 255, 218, 0.8),
      transparent 30%
    );
    transition: opacity 0.4s ease;
    opacity: 0; /* Boshida ko'rinmaydi */
    z-index: 1;
    animation: ${rotateGradient} 4s linear infinite;
  }

  &:hover::before {
    opacity: 1;
  }
`;

// Bu ichki qobiq. Kontentni va orqa fonni ushlab turadi.
const ProjectCardContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 2rem;
  margin: 2px; /* Chegara effektini yaratish uchun */
  border-radius: 8px; /* Ichki qobiqning chegarasi */
  background: linear-gradient(145deg, #172a45, #0a192f); /* To'qroq va chiroyliroq fon */
`;

const IconsHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FolderIcon = styled.div`
  color: #64ffda;
  svg {
    width: 40px;
    height: 40px;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  a {
    color: #a8b2d1;
    font-size: 1.25rem;
    transition: color 0.3s ease;
    &:hover {
      color: #64ffda;
    }
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  color: #ccd6f6;
  font-weight: 900;
  margin-top: 1.5rem; /* Sarlavha va ikonka orasida joy */
  margin-bottom: 1rem;
  transition: color 0.3s ease;

  ${ProjectCardWrapper}:hover & {
    color: #64ffda;
  }
`;

// MATN CHIQIB KETISHI MUAMMOSI HAL QILINDI
const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: #a8b2d1;
  line-height: 1.6;
  flex-grow: 1; /* Bu qolgan bo'sh joyni egallaydi */
  overflow: hidden; /* Keraksiz qismini yashiradi */
`;

const CardFooter = styled.footer`
  position: relative;
  z-index: 2;
  padding: 0 2rem 1.5rem 2rem;
  margin: -1.5rem 2px 2px 2px; /* Description va Footer orasidagi bo'sh joyni kamaytirish */
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background: linear-gradient(145deg, #172a45, #0a192f);
`;

const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
  font-family: 'Exo 2', sans-serif;
  font-size: 0.8rem;
  color: #8892b0;
`;

export default ProjectsPage;