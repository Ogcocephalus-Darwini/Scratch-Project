import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.jsx';
import './styles.scss';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './context/appContext.jsx';

const root = createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>,
);
