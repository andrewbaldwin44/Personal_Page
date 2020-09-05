import React, { createContext, useEffect, useState, createRef } from 'react';

import { PAGE_DIMENSIONS } from '../constants';
const { NAVBAR_HEIGHT } = PAGE_DIMENSIONS;

export const ScrollHeightContext = createContext(null);

export function ScrollHeightProvider({ children }) {
  const [scrollHeight, setScrollHeight] = useState(NAVBAR_HEIGHT);

  const projectsSection = createRef();
  const testimonialsSection = createRef();
  const contactSection = createRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollHeight(window.pageYOffset + NAVBAR_HEIGHT);
    });
  }, []);

  return (
    <ScrollHeightContext.Provider
      value={{
        scrollHeight,
        projectsSection,
        testimonialsSection,
        contactSection,
      }}
    >
      {children}
    </ScrollHeightContext.Provider>
  )
}
