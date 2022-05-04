import { ActionType, AddDay, AddExercise, SetCurrentWeek, ProgramActions, RemoveDay, RemoveExercise, Reset, SetCurrentDay, SetReps, SetRPE, SetSets, SetWeight } from "./actions";
import { getTodayWithWeekOffset } from "./helpers";
import { ExerciseScheme, initialProgramState, ProgramState } from "./state";

export const programReducer = (state: ProgramState, action: ProgramActions): ProgramState => {

  switch (action.type) {

    case ActionType.SetCurrentDay: {
      return { ...state, currentDay: action.payload };
    }

    case ActionType.SetCurrentWeek: {
      return { ...state, currentWeek: action.payload };
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

    case ActionType.SetRPE:
    case ActionType.SetReps:
    case ActionType.SetSets:
    case ActionType.SetWeight: {
      const schemeProperty = action.payload.property as keyof ExerciseScheme;
      const value = action.payload.value;
      const exercise = action.payload.exercise;
      const day = getTodayWithWeekOffset(state);
      const index = state.program[day].findIndex(s => s.exercise === exercise);
      // hacky way of deep cloning an object
      const changed = JSON.parse(JSON.stringify(state.program[day]));
      changed[index][schemeProperty] = value;

      return {
        ...state,
        program: {
          ...state.program,
          [day]: changed,
        }
      }
    }

    case ActionType.RemoveExercise: {
      // index will exist, since the remove-button only exists on an existing exercise
      const index = state.program[state.currentDay].findIndex(s => s.exercise === action.payload);

      let schemeForEachWeek: ProgramState['program'] = {}
      for (let week = 0; week < state.weeks; week++) {
        let changed = state.program[state.currentDay].filter((e, i) => i !== index);
        schemeForEachWeek[state.daysPerWeek * week + state.currentDay] = changed;
      }

      return {
        ...state,
        program: {
          ...state.program,
          ...schemeForEachWeek,
        },
      };
    }

    case ActionType.AddExercise: {
      let exercise = action.payload;

      // if there exists a scheme on that day
      if (state.program[state.currentDay]) {
        // clicked is already on list? Return.
        if (state.program[state.currentDay].some(e => e.exercise === exercise)) return state;

        let schemeForEachWeek: ProgramState['program'] = {}
        for (let week = 0; week < state.weeks; week++) {
          const changed = JSON.parse(JSON.stringify(state.program[state.currentDay]));
          let newScheme = { exercise: exercise, reps: '', sets: '', kgs: '', rpe: '' };
          changed.push(newScheme);
          schemeForEachWeek[state.daysPerWeek * week + state.currentDay] = changed;
        }

        return {
          ...state,
          program: {
            ...state.program, // keep all other days' exercises
            ...schemeForEachWeek,
          }
        }
      } else {

        let schemeForEachWeek: ProgramState['program'] = {}
        for (let week = 0; week < state.weeks; week++) {
          let newScheme = { exercise: exercise, reps: '', sets: '', kgs: '', rpe: '' };
          schemeForEachWeek[state.daysPerWeek * week + state.currentDay] = [newScheme];
        }

        return {
          ...state,
          program: {
            ...state.program, // keep all other days' exercises
            ...schemeForEachWeek,
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
export const setRPE = (exercise: string, rpe: string): SetRPE => ({
  type: ActionType.SetRPE,
  payload: {
    value: rpe,
    exercise: exercise,
    property: 'rpe',
  }
})

export const setSets = (exercise: string, sets: string): SetSets => ({
  type: ActionType.SetSets,
  payload: {
    value: sets,
    exercise: exercise,
    property: 'sets',
  }
})

export const setReps = (exercise: string, reps: string): SetReps => ({
  type: ActionType.SetReps,
  payload: {
    value: reps,
    exercise: exercise,
    property: 'reps',
  }
})

export const setWeight = (exercise: string, weight: string): SetWeight => ({
  type: ActionType.SetWeight,
  payload: {
    value: weight,
    exercise: exercise,
    property: 'weight',
  }
})

export const setCurrentWeek = (week: number): SetCurrentWeek => ({
  type: ActionType.SetCurrentWeek,
  payload: week,
})

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
