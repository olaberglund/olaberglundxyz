import React from 'react'
import { PageLayout } from '../../components/PageLayout.styled'
import { Sidebar, SidebarElement } from '../../components/Sidebar.styled'
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import BarChartIcon from '@mui/icons-material/BarChart';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

function Traning() {
  return (
    <PageLayout>
      <Sidebar>
        <SidebarElement to='log'>
          <NoteAddIcon />
          Logga
        </SidebarElement>
        <SidebarElement to='statistik'>
          <BarChartIcon />
          Statistik
        </SidebarElement>
        <SidebarElement to='program'>
          <FitnessCenterIcon />
          Program
        </SidebarElement>
      </Sidebar>
    </PageLayout>
  )
}

export default Traning