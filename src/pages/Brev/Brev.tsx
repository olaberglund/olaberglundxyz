import React from 'react'
import { SidebarElement, Layout, Sidebar } from './Styled.Brev'
import FeedIcon from '@mui/icons-material/Feed';
import CreateIcon from '@mui/icons-material/Create';

function Brev() {
  return (
    <Layout>
      <Sidebar>
        <SidebarElement>
          <FeedIcon />
          Se alla brev
        </SidebarElement>
        <SidebarElement>
          <CreateIcon />
          Skriv nytt brev
        </SidebarElement>
      </Sidebar>
      <button>yo</button>
    </Layout >
  )
}

export default Brev