import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { projects } from './data/projects';
import { testimonials } from'./data/testimonials';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <App projects={projects} testimonials={testimonials} />, 
  rootElement
);
