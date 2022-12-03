import { createTheme } from '@mui/material';
import { createGlobalStyle } from 'styled-components';

export const theme = createTheme({});

export const responsiveTheme = createTheme({
  backDrop: {
    backdropFilter: 'blur(3px)',
    backgroundColor: 'rgba(0,0,30,0.4)',
  },
  palette: {
    primary: {
      main: '#1D2D50',
      secondary: '#133B5C',
      tertiary: '#1E5F74',
      contrast: '#FCDAB7',
      error: '#E2231A',
      success: '#A8E890',
    },
    light: {
      main: '#F7ECDE',
      secondary: '#E9DAC1',
      tertiary: '#9ED2C6',
      contrast: '#54BAB9',
      error: '#E2231A',
      success: '#A8E890',
    },
    background: {
      default: 'transparent',
    },
    text: {
      primary: '#FFFFFF',
      h1: 'rgb(220, 248, 255)',
      h2: '#DCF8FF',
    },
  },
  typography: {
    h1: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '3rem',
      letterSpacing: '0.15px',
      textTransform: 'uppercase',
      color: 'rgb(220, 248, 255)',
      [theme.breakpoints.down('lg')]: {
        fontSize: '2.7rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.875rem',
      },
    },
    h2: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '2.2rem',
      letterSpacing: '0.15px',
      color: 'rgb(220, 248, 255)',
      [theme.breakpoints.down('lg')]: {
        fontSize: '2rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.25rem',
      },
    },
    body1: {
      fontSize: '2rem',
      fontWeight: '400',
      letterSpacing: '0.15px',
      textAlign: 'left',
      color: '#DCF8FF',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
    body2: {
      fontSize: '1rem',
      color: '#DCF8FF',
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.875rem',
      },
    },
    button: {
      fontSize: '2rem',
      color: '#DCF8FF',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.25rem',
      },
    },
    buttonIcon: {
      fontSize: '2rem',
      color: '#DCF8FF',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.25rem',
      },
    },
    subtitle1: {
      fontSize: '1.5rem',
      color: '#DCF8FF',
      [theme.breakpoints.down('lg')]: {
        fontSize: '1.125rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
  },
});

export const GlobalStyle = createGlobalStyle`
  #root {
    height: 100vh;
  --shadow-color: 199deg 51% 17%;
  --shadow-elevation-low:
    0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
    0.4px 0.8px 1px -1.2px hsl(var(--shadow-color) / 0.34),
    1px 2px 2.5px -2.5px hsl(var(--shadow-color) / 0.34);
  --shadow-elevation-medium:
    0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.36),
    0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.36),
    2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.36),
    5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.36);
  --shadow-elevation-high:
    0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
    1.5px 2.9px 3.7px -0.4px hsl(var(--shadow-color) / 0.34),
    2.7px 5.4px 6.8px -0.7px hsl(var(--shadow-color) / 0.34),
    4.5px 8.9px 11.2px -1.1px hsl(var(--shadow-color) / 0.34),
    7.1px 14.3px 18px -1.4px hsl(var(--shadow-color) / 0.34),
    11.2px 22.3px 28.1px -1.8px hsl(var(--shadow-color) / 0.34),
    17px 33.9px 42.7px -2.1px hsl(var(--shadow-color) / 0.34),
    25px 50px 62.9px -2.5px hsl(var(--shadow-color) / 0.34);
}
  .App {
    text-align: center;
    overflow: auto;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  *{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  body {
    background-size: cover;
    height: 100vh;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${responsiveTheme.palette.primary.tertiary};  
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  .icon{
    width: 9rem;
    align-self: flex-end;
  }
  @media only screen and (max-width: 600px) {
    .icon {width: 5rem;}
    
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}`;
