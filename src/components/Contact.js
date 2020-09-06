import React, { useContext } from 'react';
import styled from 'styled-components';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import { ScrollHeightContext } from './ScrollHeightContext';

function Contact() {
  const { contactSection } = useContext(ScrollHeightContext);

  return (
    <ContactSection id="contact-section" ref={contactSection}>
      <h3>Let's Work Together!</h3>
        <ContactInfo>
          <a
            alt="Github link"
            href="https://github.com/andrewbaldwin44"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            Github
          </a>
          <a
            alt="Linked-in link"
            href="https://www.linkedin.com/in/andrew-baldwin44/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            Linked In
          </a>
          <a
            alt="Email link"
            href="mailto:andrew.baldwin44@protonmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
            Email
          </a>
      </ContactInfo>
    </ContactSection>
  )
}

export default Contact;

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: calc(100vh - var(--navbar-height));
  font-size: 2.2rem;

  h3 {
    font-style: italic;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  padding: 0 20px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
  }

  svg {
    margin-right: 15px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
