import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle, responsiveTheme } from './global.css';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MuiThemeProvider theme={responsiveTheme}>
      <ThemeProvider theme={responsiveTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </MuiThemeProvider>
  </React.StrictMode>
);
