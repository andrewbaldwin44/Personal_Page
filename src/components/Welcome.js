import React from 'react';
import styled, { keyframes } from 'styled-components';

import Profile from '../assets/images/profile.JPG';

import { IoIosArrowDown } from 'react-icons/io';

function Welcome() {
  return (
    <WelcomeSection id="welcome-section">
      <TextContent className='text-content'>
        <h2 className='heading'>
          Hi there! <span role='img' aria-label='wave hello'>👋</span>
        </h2>
        <p className='blurb'>
          I'm Andrew Baldwin, a full stack web developper and graduate of
          Concordia University Bootcamps in Montreal, Canada. I am very
          passionate about coding and highly skilled in JavaScript, Ruby,
          and Python. Check out my work using popular web frameworks and
          libraries including React.js, Redux.js, Node.js, Rails, Django,
          and so much more!
        </p>
      </TextContent>
      <ProfileImage src={Profile} alt='Profile' className='profile-picture' />
      <a href='#projects-section'>
        <ChevronDown />
      </a>
    </WelcomeSection>
  )
}

const WelcomeSection = styled.section`
  display: flex;
  align-items: center;
  margin-top: var(--navbar-height);
  height: calc(100vh - var(--navbar-height));
  width: 100%;
  padding: 0 20px;
  text-align: center;

  @media (max-width: 800px) {
    align-items: flex-start;

    .heading {
      font-size: 1.2em;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .blurb {
      font-size: 0.8em;
      width: 90%;
    }

    .profile-picture {
      margin-right: 0;
      margin-top: 30px;
      height: 20%;
    }

    .text-content {
      height: 100%;
    }
  }
`;

const welcomeFadeIn = keyframes`
  0% {opacity: 0}
  10% {opacity: 0}
  100% {opacity: 1}
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;

  h2 {
    margin: 40px 0;
    font-size: 2em;
    animation-name: ${welcomeFadeIn};
    animation-duration: 4s;
  }

  p {
    font-size: 1.2em;
    width: 55%;
    line-height: 1.4;
    text-align: justify;
    animation-name: introFadeIn;
    animation-duration: 4s;
  }

  @keyframes introFadeIn {
    0% {opacity: 0}
    40% {opacity: 0}
    100% {opacity: 1}
  }
  @keyframes buttonFadeIn {
    0% {opacity: 0}
    75% {opacity: 0}
    100% {opacity: 1}
  }
`;

const ProfileImage = styled.img`
  height: 75%;
  width: auto;
  margin-right: 8%;
  box-shadow: 0px 5px 15px #212121;
  animation-name: ${welcomeFadeIn};
  animation-duration: 4s;
`;

const ChevronDown = styled(IoIosArrowDown)`
  position: absolute;
  font-size: 2.4em;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  animation-name: buttonFadeIn;
  animation-duration: 4s;
  transition: 1.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.04) translateX(-50%);
  }
`;

export default Welcome;
