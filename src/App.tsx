import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Brev from './pages/Brev/Brev';
import { FlexLayout } from './styles/App.styled';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <FlexLayout>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="brev/*" element={<Brev />} />
            <Route path="*" element={<div>Not Found!</div>} />
          </Routes>
        </FlexLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
