import React, { useContext } from 'react';
import styled from 'styled-components';

import { isContainingData } from '../utils/index';

import Carousel from './Carousel';

import { IoIosArrowDown } from 'react-icons/io';

import { DataContext } from './DataContext';
import { ScrollHeightContext } from './ScrollHeightContext';

function Projects() {
  const { projects } = useContext(DataContext);
  const { projectsSection } = useContext(ScrollHeightContext);

  return (
    <ProjectsSection id="projects-section" ref={projectsSection}>
      <h2>My Projects!</h2>
      {isContainingData(projects) &&
        <Carousel>
          {projects.map(project => {
            const { _id, title, link, image } = project;

            return (
              <TileItem key={_id}>
                <a
                  href={link}
                  alt={`${title} Link`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TileImage src={image} alt={`${title} thumb`}/>
                  <TitleBox>
                    <span>{title}</span>
                  </TitleBox>
                </a>
              </TileItem>
            )
          })}
        </Carousel>
      }
      <a href='#testimonials-section'>
        <ChevronDown />
      </a>
    </ProjectsSection>
  )
}

const ProjectsSection = styled.section`
  position: relative;
  width: 100vw;
  min-height: calc(100vh - var(--navbar-height));
  background-color: var(--orangeBG);
  padding: 20px;

  h2 {
    text-decoration: underline;
    text-align: center;
    align-self: center;
    font-size: 1.5em;
  }
`;

const TileItem = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: white;
  border-radius: 10px;
  height: 100%;
  max-width: 90%;
  margin-left: 1.6vw;
  margin-bottom: 100px;
  cursor: pointer;
  transition: transform 0.8s;

  &:hover {
    transform: scale(1.01);
  }
`;

const TileImage = styled.img`
  width: 80%;
  max-height: 400px;
  padding-top: 10px;
  margin: 0 auto;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 110px;
  background-color: var(--blackBG);
`;

const ChevronDown = styled(IoIosArrowDown)`
  position: absolute;
  font-size: 2em;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;


export default Projects;
