import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.scss"
import App from './App';
import { DarkModeProvider } from './context/darkMode';
import { AuthContextProvider } from './context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
