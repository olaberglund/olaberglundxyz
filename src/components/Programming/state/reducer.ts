import { ActionType, AddDay, AddExercise, ProgramActions, RemoveDay, RemoveExercise, Reset, SetCurrentDay } from "./actions";
import { initialProgramState, ProgramState } from "./state";

export const programReducer = (state: ProgramState, action: ProgramActions): ProgramState => {
  switch (action.type) {
    case ActionType.SetCurrentDay: {
      return { ...state, currentDay: action.payload };
    }
    case ActionType.AddDay: {
      return {
        ...state,
        daysPerWeek: state.daysPerWeek + 1
      }
    }
    case ActionType.RemoveDay: {
      return {
        ...state,
        daysPerWeek: state.daysPerWeek - 1
      };
    }
    case ActionType.RemoveExercise: {
      // index will exist, since the remove-button only exists on an existing exercise
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

    case ActionType.AddExercise: {
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
      } else {
        return {
          ...state,
          program: {
            ...state.program, // keep all other days' exercises
            [state.currentDay]: [newScheme]
          }
        }
      }
    }

    case ActionType.Reset: return initialProgramState;

    default:
      return state;
  }
};

// helper functions to simplify call

export const addExercise = (exercise: string): AddExercise => ({
  type: ActionType.AddExercise,
  payload: exercise,
});

export const removeExercise = (exercise: string): RemoveExercise => ({
  type: ActionType.RemoveExercise,
  payload: exercise,
});

export const addDay = (): AddDay => ({
  type: ActionType.AddDay,
})

export const removeDay = (): RemoveDay => ({
  type: ActionType.RemoveDay,
});

export const setCurrentDay = (day: number): SetCurrentDay => ({
  type: ActionType.SetCurrentDay,
  payload: day,
});

export const reset = (): Reset => ({
  type: ActionType.Reset,
})
