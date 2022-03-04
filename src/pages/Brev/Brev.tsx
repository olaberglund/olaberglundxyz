import React from 'react'
import FeedIcon from '@mui/icons-material/Feed';
import CreateIcon from '@mui/icons-material/Create';
import { QuestionMark } from '@mui/icons-material';
import { Sidebar, SidebarElement } from '../../components/Sidebar.styled';
import { PageLayout } from '../../components/PageLayout.styled';
import { Outlet } from 'react-router-dom';

function Brev() {

  return (
    <PageLayout>
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
      <Outlet />
    </PageLayout>
  )
}

export default Brev