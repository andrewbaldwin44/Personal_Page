import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { projects } from './data/projects';
import { testimonials } from'./data/testimonials';

import { ScrollHeightProvider } from './components/ScrollHeightContext';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <ScrollHeightProvider>
    <App
      projects={projects}
      testimonials={testimonials}
    />
  </ScrollHeightProvider>,
  rootElement
);
