import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Brev from './pages/Brev/Brev';
import { FlexLayout } from './styles/App.styled';
import Traning from './pages/Traning/Traning';
import { UserContext } from './lib/firebase/context';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './lib/firebase/firebase';

function App() {
  const [user] = useAuthState(auth)
  const [name, setName] = useState(null);

  useEffect(() => {
    //realtime subscription
    let unsubscribe; 

    if(user) {
    }
  }, [user])

  return (

    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <FlexLayout>
          <UserContext.Provider value={{name: "Jordan"}}>
            <Navbar />
            <Routes>
              <Route index element={<Home />} />
              <Route path="brev/*" element={<Brev />} />
              <Route path="traning/*" element={<Traning />} />
              <Route path="*" element={<div>Not Found!</div>} />
            </Routes>
          </UserContext.Provider>
        </FlexLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
