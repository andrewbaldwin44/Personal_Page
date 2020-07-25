import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  left: 0;
  width: 100vw;
  background-color: var(--orangeBG);

  h2 {
    text-decoration: underline;
    text-align: center;
    align-self: center;
    padding-top: 60px;
    margin-bottom: 80px;
    font-size: 1.5em;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TileItem = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: white;
  text-align: center;
  border-radius: 10px;
  width: calc(100% / 3 - 4vw);
  height: auto;
  margin-bottom: 100px;
  margin-right: 2vw;
  margin-left: 2vw;
  cursor: pointer;
  transition: all 0.8s ease-in-out;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 8px 8px var(--shadow);
  }
`;

const TileImage = styled.img`
  width: 80%;
  height: auto;
  padding-top: 10px;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 110px;
  background-color: var(--blackBG);
`;

function Projects({ projects }) {
  return (
    <ProjectsSection id="projects-section">
      <h2>Here are Some of my Projects!</h2>
      <ProjectsContainer>
        {projects.map(project => {
          return (
            <TileItem key={project.title.toLowerCase().replace(' ', '')}>
              <a
                href={project.link} alt={`${project.title} Link`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TileImage src={project.img} alt={`${project.title} thumb`}/>
                <TitleBox>
                  <span>{project.title}</span>
                </TitleBox>
              </a>
            </TileItem>
          )
        })}
      </ProjectsContainer>
    </ProjectsSection>
  )
}

export default Projects;
