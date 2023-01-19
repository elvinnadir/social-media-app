import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.scss"
import App from './App';
import { DarkModeProvider } from './context/darkMode';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);
