import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  :root {
    --primary-white: linear-gradient(rgba(158, 169, 151, 1), rgba(255, 255, 255, 0.5) 100%);
    --secondary-green: linear-gradient(180deg, #9EA997 0%, rgba(184, 197, 172, 0.5) 100%);
    --font-primary-dark: #333438;
    --secondary-white: #ffffff;
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
