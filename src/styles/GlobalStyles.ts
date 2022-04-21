import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text.light};
  }

  body, #root, html {
    height: 100vh;
  }
`

export default GlobalStyle;