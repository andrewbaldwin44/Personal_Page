import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { testimonials } from'./data/testimonials';

import { ScrollHeightProvider } from './components/ScrollHeightContext';
import { DataProvider } from './components/DataContext';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <DataProvider>
    <ScrollHeightProvider>
      <App
        testimonials={testimonials}
      />
    </ScrollHeightProvider>
  </DataProvider>,
  rootElement
);
