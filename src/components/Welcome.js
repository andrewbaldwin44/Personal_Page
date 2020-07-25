import React from 'react';
import styled from 'styled-components';

const WelcomeSection = styled.section`
  margin-top: var(--navbar-height);
  height: calc(100vh - var(--navbar-height));
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h2 {
    font-size: 3rem;
    animation-name: welcomeFadeIn;
    animation-duration: 4s;
  }

  p {
    font-size: 2.5rem;
    animation-name: introFadeIn;
    animation-duration: 4s;
  }

  .fa-chevron-down {
    position: absolute;
    font-size: 3.5rem;
    bottom: 20px;
    cursor: pointer;
    animation-name: buttonFadeIn;
    animation-duration: 4s;
    transition: 1.2s;
  }
  .fa-chevron-down:hover {
    transform: scale(1.1);
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
`

function Welcome() {
  return (
    <WelcomeSection id="welcome-section">
      <h2>Welcome!</h2>
      <p>
        I create the websites you need!
      </p>
      <a href="#projects-section">
        <i className="fas fa-chevron-down"></i>
      </a>
    </WelcomeSection>
  )
}

export default Welcome;
