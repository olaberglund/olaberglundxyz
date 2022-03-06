import React, { useContext } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import BrevDataTable from './BrevDataTable';
import CreateProgram from './Program/CreateProgram';
import Traning from '../pages/Traning/Traning';
import Navbar from './Navbar/Navbar';
import Home from '../pages/Home';
import Brev from '../pages/Brev/Brev';
import { UserContext } from '../lib/firebase/context';

function Routing() {
  const { user } = useContext(UserContext);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        {user ?
          <>
            <Route path="brev" element={<Brev />}>
              <Route index element={<p>Välj något</p>} />
              <Route path="alla" element={<BrevDataTable />} />
              <Route path="nytt" element={<p>Nytt brev</p>} />
              <Route path="faq" element={<p>Faq</p>} />
            </Route>
            <Route path="traning" element={<Traning />}>
              <Route path="logga" element={<></>} />
              <Route path="statistik" element={<p>Nytt brev</p>} />
              <Route path="program" element={<CreateProgram />} />
            </Route>
            <Route path="*" element={<div>Not Found!</div>} />
          </>
          :
          <Route path="*" element={<Navigate to='/' />} />
        }
      </Routes>
    </Router>
  )
}

export default Routing