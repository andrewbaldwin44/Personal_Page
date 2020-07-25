import React from 'react';
// import { useQuery } from 'react-router-dom';
import Welcome from './Welcome';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Contact from './Contact';

function Homepage({ projects, testimonials }) {
  // const { page, limit } = useQuery();

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
