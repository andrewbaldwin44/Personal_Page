import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import NavBar from './NavBar';
import Homepage from './Homepage';
import styled from 'styled-components';

import { FiArrowUpCircle } from 'react-icons/fi';

import { ScrollHeightContext } from './ScrollHeightContext';

import { PAGE_DIMENSIONS } from '../constants';
const { NAVBAR_HEIGHT } = PAGE_DIMENSIONS;

function App({ projects, testimonials }) {
  const {
    scrollHeight,
    projectsSection,
    testimonialsSection,
    contactSection,
  } = useContext(ScrollHeightContext);

  const getOffset = ref => ref.current.offsetTop;

  const handleScrollUp = () => {
    const projectsScrollHeight = getOffset(projectsSection);
    const testimonialsScrollHeight = getOffset(testimonialsSection);
    const contactScrollHeight = getOffset(contactSection);

    if (scrollHeight > projectsScrollHeight && scrollHeight <= testimonialsScrollHeight) {
      window.scrollTo(0, projectsScrollHeight - NAVBAR_HEIGHT);
    }
    else if (scrollHeight > testimonialsScrollHeight && scrollHeight !== contactScrollHeight) {
      window.scrollTo(0, testimonialsScrollHeight - NAVBAR_HEIGHT);
    }
    else {
      window.scrollTo(0, 0); //  top
    }
  }

  return (
    <Router>
      <GlobalStyles />
      <NavBar />
      {scrollHeight > NAVBAR_HEIGHT && (
        <StyledUpIcon
          onClick={handleScrollUp}
        />
      )}
      <Switch>
        <Route exact path='/'>
          <Homepage
            projects={projects}
            testimonials={testimonials}
          />
        </Route>
      </Switch>
    </Router>
  )
}

const StyledUpIcon = styled(FiArrowUpCircle)`
  position: fixed;
  color: black;
  font-size: 50px;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  backdrop-filter: blur(15px);
  opacity: 0.5;
  cursor: pointer;
`;

export default App;
