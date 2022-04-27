import React, { useReducer } from 'react';
import { ExerciseScheme } from '../../lib/firebase/schemas/programs';
import ProgramForm from './steps/ProgramForm';
import ProgramsTabber from './steps/ProgramsTabber';
import Stepper from './steps/Stepper';

type State = {
  /** The current day that is being changed */
  currentDay: number;

  /** The number of days per week */
  daysPerWeek: number;

  /** The program as it stands right now.
   *  The key represents the day and
   *  the value represents that day's exercises.
   */
  program: Record<number, ExerciseScheme[]>;
}

/** The initial state of any program */
const initialState: State = {
  currentDay: 0,
  daysPerWeek: 3,
  program: {},
}

type Action =
  | { type: 'setCurrentDay'; payload: State["currentDay"] }
  | { type: 'addExercise'; payload: string }
  | { type: 'removeExercise'; payload: string }
  | { type: 'addDay' }
  | { type: 'removeDay' }
  | { type: 'reset' };


const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setCurrentDay': {
      return { ...state, currentDay: action.payload };
    }
    case 'addDay': {
      return {
        ...state,
        daysPerWeek: state.daysPerWeek + 1
      }
    }
    case 'removeDay': {
      return {
        ...state,
        daysPerWeek: state.daysPerWeek - 1
      };
    }

    case 'removeExercise': {
      // index will exists, since the remove-button only exists on an existing exercise
      const index = state.program[state.currentDay].findIndex(s => s.exercise === action.payload);
      const changed = state.program[state.currentDay].filter((e, i) => i !== index);
      return {
        ...state,
        program: {
          ...state.program,
          [state.currentDay]: changed
        },
      };
    }
    case 'addExercise': {
      let exercise = action.payload;
      let newScheme = { exercise: exercise, reps: '', sets: '', kg: '', rpe: '' };

      // if there exists a scheme on that day
      if (state.program[state.currentDay]) {
        // clicked is already on list? Return.
        if (state.program[state.currentDay].some(e => e.exercise === exercise)) return state;

        const changed = state.program[state.currentDay].slice(0);
        changed.push(newScheme);

        return {
          ...state,
          program: {
            ...state.program, // keep all other days' exercises
            [state.currentDay]: changed // update the specified day's exercises
          }
        }

      }
      return {
        ...state,
        program: {
          [state.currentDay]: [newScheme]
        }
      }
    }
    case 'reset': return initialState;
    default:
      return initialState;
  }
};

const ProgramStepper: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const steps = [
    ProgramsTabber,
    ProgramForm
  ]

  return (
    <Stepper steps={steps} />
  )
}

export default ProgramStepper;