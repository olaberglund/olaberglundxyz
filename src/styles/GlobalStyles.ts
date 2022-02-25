import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.body};
    color: white;
  }

`

export default GlobalStyle;