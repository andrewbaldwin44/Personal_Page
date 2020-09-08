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
          <h2>Full-Stack Web Developer</h2>
      </a>
      <div className='nav-menu'>
        <GiHamburgerMenu />
        <div className='section-links'>
          <UnderlineContent>
            <a href='#welcome-section' className='nav-link'>About</a>
            <Underline className='underline' />
          </UnderlineContent>
          <UnderlineContent>
            <a href='#projects-section' className='nav-link'>Projects</a>
            <Underline className='underline' />
          </UnderlineContent>
          <UnderlineContent>
            <a href='#testimonials-section' className='nav-link'>Testimonials</a>
            <Underline className='underline' />
          </UnderlineContent>
          <UnderlineContent>
            <a href='#contact-section' className='nav-link'>Contact</a>
            <Underline className='underline' />
          </UnderlineContent>
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
  padding: 0 90px;

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

  svg {
    display: none;
    color: white;
    font-size: 1.4em;
    cursor: pointer;
  }

  div:not(:last-child) {
    margin-right: 30px;
  }

  @media (max-width: 800px) {
    padding: 0 30px;

    .section-links {
      position: absolute;
      display: none;
      flex-direction: column;
      align-items: center;
      background-color: var(--redBG);
      line-height: 2;
      left: 0;
      top: ${NAVBAR_HEIGHT}px;
      width: 100%;
      padding: 20px 0;

      div {
        margin: 0;
      }
    }

    svg {
      display: block;
    }

    .nav-menu:hover > .section-links {
      display: flex;
    }
  }
`;

const UnderlineContent = styled.div`
  position: relative;
  display: inline-block;

  .nav-link {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--navbar-height);
    font-size: 1.2em;
  }

  &:hover .underline {
    width: 100%;
  }
`;

const Underline = styled.div`
  position: absolute;
  width: 0%;
  height: 6px;
  bottom: 0;
  background-color: white;
  transition: width 0.3s;
  border-radius: 2px;
`;

export default NavBar;
