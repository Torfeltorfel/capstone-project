import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  :root {
    --white-background: linear-gradient(to top,rgba(243, 241, 239, 1), rgba(255, 255, 255, 0.5));
    --green-background: linear-gradient(to top,rgba(184, 197, 172, 1.5),rgba(158, 169, 151, 1));
    --green-simple: rgba(184, 197, 172, 1.5);
    --font-primary-dark: #333438;
    --white: #ffffff;
    --grey-100: rgba(255, 255, 255, 0.15);
    --grey-300: rgba(246, 246, 244, 1);
    --grey-500: rgba(236, 236, 236, 1);
    --grey-700: rgba(218, 218, 218, 1);
    --box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.2);
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
