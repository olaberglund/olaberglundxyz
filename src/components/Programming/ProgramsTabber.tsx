import React from 'react';
import ProgramForm from './ProgramForm';
import Tabber from './Tabber';
import { Tab } from './types';


const ProgramsTabber: React.FC = ({ children }) => {

  const tabs: Tab[] = [
    {
      title: "Nytt",
      content: <><ProgramForm />{children}</>,
    },
    {
      title: "Översikt",
      content: <p>En översikt</p>,
    }
  ]

  return (
    <Tabber tabs={tabs} />
  )
}

export default ProgramsTabber;