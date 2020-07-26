import React from 'react';
import Welcome from './Welcome';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Contact from './Contact';

function Homepage({ projects, testimonials }) {
  return (
    <>
      <Welcome />
      <Projects projects={projects} />
      <Testimonials testimonials={testimonials} />
      <Contact />
    </>
  )
}

export default Homepage;
