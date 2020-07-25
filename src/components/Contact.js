import React from 'react';
import styled from 'styled-components';

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

  a {
    padding-left
  }

  .fa-github, .fa-envelope, .fa-linkedin {
    margin-right: 10px;
  }
`;

function Contact() {
  return (
    <ContactSection id="contact-section">
      <h3>Let's Work Together!</h3>
        <ContactInfo>
          <a alt="Github link" href="https://github.com/andrewbaldwin44" target="_blank">
            <i className="fab fa-github"></i>
            Github
          </a>
          <a alt="Linked-in link" href="https://www.linkedin.com/in/andrew-baldwin-47b7011b2/" target="_blank">
            <i className="fab fa-linkedin"></i>
            Linked In
          </a>
          <a alt="Email link" href="mailto:andrew.baldwin44@protonmail.com" target="_blank">
            <i className="fas fa-envelope"></i>
            Email
          </a>
      </ContactInfo>
    </ContactSection>
  )
}

export default Contact;
