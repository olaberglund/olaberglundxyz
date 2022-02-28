import React from 'react'
import { SidebarElement, Layout, Sidebar } from './Styled.Brev'
import FeedIcon from '@mui/icons-material/Feed';
import CreateIcon from '@mui/icons-material/Create';
import { QuestionMark } from '@mui/icons-material';

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
        <SidebarElement to="faq">
          <QuestionMark />
          Tips & tricks
        </SidebarElement>
      </Sidebar>
    </Layout>
  )
}

export default Brev