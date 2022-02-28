import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  html {
    height: 100vh;
  }

  body, #root {
    height: 100%;
  }


`

export default GlobalStyle;