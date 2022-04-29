import { initialProgramState, ProgramState } from './state';
import { ProgramActions } from './actions';
import { createContext } from 'react';

export const ProgramContext = createContext<{
  state: ProgramState,
  dispatch: React.Dispatch<ProgramActions>
}>({
  state: initialProgramState,
  dispatch: () => undefined,
})
