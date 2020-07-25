import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: var(--navbar-height);
  left: 0px;
  top: 0px;
  background-color: var(--redBG);
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1, h2 {
    margin-left: 40px;
    cursor: pointer;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-style: italic;
    font-size: 18px;
  }

  a {
    padding-right: 40px;
  }
`

function NavBar() {
  return (
    <Nav>
      <a href="#welcome-section">
          <h1>Andrew Baldwin</h1>
          <h2>Full Stack Web Developper</h2>
      </a>
      <section>
        <a class="link" href="#welcome-section">About</a>
        <a class="link" href="#projects-section">Projects</a>
        <a class="link" href="#testimonials-section">Testimonials</a>
        <a class="link" href="#contact-section">Contact</a>
      </section>
    </Nav>
  )
}

export default NavBar;
