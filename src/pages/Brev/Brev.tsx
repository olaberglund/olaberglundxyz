import React from 'react'
import { SidebarElement, Layout, Sidebar } from './Styled.Brev'
import FeedIcon from '@mui/icons-material/Feed';
import CreateIcon from '@mui/icons-material/Create';
import { QuestionMark } from '@mui/icons-material';
import { Route, Routes } from 'react-router-dom';
import BrevDataTable from '../../components/BrevDataTable';

function Brev() {

  const links = {
    alla: "alla",
    nytt: "nytt",
    faq: "faq",
  }

  return (
    <Layout>
      <Sidebar>
        <SidebarElement to={links.alla}>
          <FeedIcon />
          Se alla brev
        </SidebarElement>
        <SidebarElement to={links.nytt}>
          <CreateIcon />
          Skriv nytt brev
        </SidebarElement>
        <SidebarElement to={links.faq}>
          <QuestionMark />
          Tips & tricks
        </SidebarElement>
      </Sidebar>
      <Routes>
        <Route index element={<p>Inget att visa.</p>} />
        <Route path={links.alla} element={<BrevDataTable />} />
        <Route path={links.nytt} element={<p>Nytt brev</p>} />
        <Route path={links.faq} element={<p>Faq</p>} />
      </Routes>
    </Layout>
  )
}

export default Brev