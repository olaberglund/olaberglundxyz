import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyles';
import { FlexLayout } from './styles/App.styled';
import { UserContext } from './lib/firebase/context';
import { useUserData } from './lib/hooks';
import Routing from './components/Routing';

function App() {
  const [user, loading] = useUserData();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserContext.Provider value={{ user: user, loading: loading }}>
        <FlexLayout>
          {!loading && (
            <Routing />
          )}
        </FlexLayout>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
