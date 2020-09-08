import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { ScrollHeightProvider } from './components/ScrollHeightContext';
import { DataProvider } from './components/DataContext';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <DataProvider>
    <ScrollHeightProvider>
      <App />
    </ScrollHeightProvider>
  </DataProvider>,
  rootElement
);
