import React from 'react';
import styled from 'styled-components';

import { GiHamburgerMenu } from 'react-icons/gi';

import { PAGE_DIMENSIONS } from '../constants';
const { NAVBAR_HEIGHT } = PAGE_DIMENSIONS;

function NavBar() {
  return (
    <Nav>
      <a href='#welcome-section' className='nav-link'>
          <h1>Andrew Baldwin</h1>
          <h2>Full Stack Web Developer</h2>
      </a>
      <div className='nav-menu'>
        <GiHamburgerMenu />
        <div className='section-links'>
          <a href='#welcome-section' className='nav-link'>About</a>
          <a href='#projects-section' className='nav-link'>Projects</a>
          <a href='#testimonials-section' className='nav-link'>Testimonials</a>
          <a href='#contact-section' className='nav-link'>Contact</a>
        </div>
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  height: ${NAVBAR_HEIGHT}px;
  left: 0px;
  top: 0px;
  background-color: var(--redBG);
  box-shadow: 0 2px 5px var(--blackBG);
  padding: 0 40px;

  h1, h2 {
    cursor: pointer;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-style: italic;
    font-size: 18px;
  }

  .nav-link:not(:last-child) {
    padding-right: 40px;
  }

  svg {
    display: none;
    cursor: pointer;
  }

  @media (max-width: 800px) {
    .section-links {
      display: none;
    }

    svg {
      display: block;
    }

    .nav-menu:hover > .section-links {
      display: flex;
    }

    .section-links {
      position: absolute;
      flex-direction: column;
      align-items: center;
      background-color: var(--redBG);
      line-height: 2;
      left: 0;
      top: ${NAVBAR_HEIGHT}px;
      width: 100%;
      padding: 20px 0;

      .nav-link {
        padding: 0;
      }
    }
  }
`;

export default NavBar;
