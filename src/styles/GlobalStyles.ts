import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text.light};
  }

  #root {
    height: 100vh;
  }

  body, html {
    height: 100%;
  }
  
`

export default GlobalStyle;