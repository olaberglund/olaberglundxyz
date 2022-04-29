import React from 'react';
import ExerciseForm from './ExerciseForm';
import Tabber from '../Tabber';
import { Tab } from '../types';

const ProgramsTabber: React.FC = ({ children }) => {

  const tabs: Tab[] = [
    {
      title: "Nytt",
      content: <><ExerciseForm />{children}</>,
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
