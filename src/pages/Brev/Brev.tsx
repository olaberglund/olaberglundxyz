import React from 'react'
import { SidebarElement, Layout, Sidebar } from './Styled.Brev'
import FeedIcon from '@mui/icons-material/Feed';
import CreateIcon from '@mui/icons-material/Create';

function Brev() {
  return (
    <Layout>
      <Sidebar>
        <SidebarElement to="alla">
          <FeedIcon />
          Se alla brev
        </SidebarElement>
        <SidebarElement to="nytt">
          <CreateIcon />
          Skriv nytt brev
        </SidebarElement>
      </Sidebar>
      <button>yo</button>
    </Layout>
  )
}

export default Brev