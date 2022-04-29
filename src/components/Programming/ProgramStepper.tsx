import React, { useReducer } from 'react';
import { ProgramContext } from './state/context';
import { programReducer } from './state/reducer';
import { initialProgramState } from './state/state';
import ProgramForm from './steps/ProgramForm';
import ProgramsTabber from './steps/ProgramsTabber';
import Stepper from './steps/Stepper';


const ProgramStepper: React.FC = () => {
  const [state, dispatch] = useReducer(programReducer, initialProgramState);

  const steps = [
    ProgramsTabber,
    ProgramForm
  ]

  return (
    <ProgramContext.Provider value={{ state, dispatch }}>
      <Stepper steps={steps} />
    </ProgramContext.Provider>
  )
}

export default ProgramStepper;
