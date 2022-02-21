import React from 'react';
import Home from './pages/Home/Home';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
