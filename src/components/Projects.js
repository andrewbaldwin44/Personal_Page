import React from 'react';
import styled from 'styled-components';

import Slider from "react-slick";
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';

function Arrow({ className, style, onClick, icon }) {
  return (
    <SideScrollChevron
      style={{ ...style }}
      onClick={onClick}
    >
      {icon}
    </SideScrollChevron>
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <Arrow icon={<IoIosArrowForward />} />,
  prevArrow: <Arrow icon={<IoIosArrowBack />} />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        arrows: false,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
      }
    }
  ]
};

function Projects({ projects }) {
  return (
    <ProjectsSection id="projects-section">
      <h2>Here are Some of my Projects!</h2>
      <StyledSlider {...settings}>
        {projects.map(project => {
          const normalizedProjectTitle = project.title.toLowerCase().replace(' ', '');

          return (
            <TileItem key={normalizedProjectTitle}>
              <a
                href={project.link}
                alt={`${project.title} Link`}
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
      </StyledSlider>
      <a href='#testimonials-section'>
        <ChevronDown />
      </a>
    </ProjectsSection>
  )
}

const ProjectsSection = styled.section`
  position: relative;
  width: 100vw;
  height: calc(100vh - var(--navbar-height));
  background-color: var(--orangeBG);
  padding: 0 20px;

  h2 {
    text-decoration: underline;
    text-align: center;
    align-self: center;
    padding-top: 60px;
    margin-bottom: 80px;
    font-size: 1.5em;
  }
`;

const StyledSlider = styled(Slider)`
  position: absolute;
  display: flex;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
  width: 95vw;
  height: 60%;
  bottom: 12%;
`;

const SideScrollChevron = styled.span`
  cursor: pointer;
  font-size: 50px;
`;

const TileItem = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: white;
  border-radius: 10px;
  height: 100%;
  max-width: 90%;
  margin-bottom: 100px;
  margin-right: 2vw;
  margin-left: 2vw;
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
