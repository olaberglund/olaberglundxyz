import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyles';
import {} from 'styled-components/cssprop'

  function App() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="App">
        </div>
      </ThemeProvider>
    );
  }

export default App;
