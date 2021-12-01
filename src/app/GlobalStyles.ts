import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  :root {
    --white-background: linear-gradient(to top,rgba(243, 241, 239, 1), rgba(255, 255, 255, 0.5));
    --green-background: linear-gradient(to top,rgba(184, 197, 172, 1.5),rgba(158, 169, 151, 1));
    --green-simple: rgba(184, 197, 172, 1.5);
    --font-primary-dark: #333438;
    --white: #ffffff;
    --grey-300: #F6F6F4;
    --grey-500: #ECECEC;
    --grey-700: #DADADA;
  }

  *,*::before,*::after{
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Merriweather', 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
  }
`;
export default GlobalStyles;
