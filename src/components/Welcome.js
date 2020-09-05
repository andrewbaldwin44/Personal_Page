import React from 'react';
import styled from 'styled-components';

import { IoIosArrowDown } from 'react-icons/io';

function Welcome() {
  return (
    <WelcomeSection id="welcome-section">
      <h2>Welcome!</h2>
      <p>
        I create the websites you need!
      </p>
      <a href='#projects-section'>
        <ChevronDown />
      </a>
    </WelcomeSection>
  )
}

const WelcomeSection = styled.section`
  margin-top: var(--navbar-height);
  height: calc(100vh - var(--navbar-height));
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 20px;
  text-align: center;

  h2 {
    font-size: 2em;
    animation-name: welcomeFadeIn;
    animation-duration: 4s;
  }

  p {
    font-size: 1.6em;
    animation-name: introFadeIn;
    animation-duration: 4s;
  }

  @keyframes welcomeFadeIn {
    0% {opacity: 0}
    10% {opacity: 0}
    100% {opacity: 1}
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
