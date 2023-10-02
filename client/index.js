import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app.jsx';
import store from './store.js';
import stylesheet from './styles.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> <App /> </Provider>
);
