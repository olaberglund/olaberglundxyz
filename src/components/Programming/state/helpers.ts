import { ExerciseScheme, ProgramState } from './state';

export const getTodayWithWeekOffset = (state: ProgramState) => state.currentWeek * state.daysPerWeek + state.currentDay;

export const getSetsOfExerciseOnDay = (state: ProgramState, exercise: string, day: number) => {
  return getMetrics(state, exercise, 'sets', day);
}

export const getRepsOfExerciseOnDay = (state: ProgramState, exercise: string, day: number) => {
  return getMetrics(state, exercise, 'reps', day);
}

export const getRPEOfExerciseOnDay = (state: ProgramState, exercise: string, day: number) => {
  return getMetrics(state, exercise, 'rpe', day);
}

export const getWeightOfExerciseOnDay = (state: ProgramState, exercise: string, day: number) => {
  return getMetrics(state, exercise, 'kgs', day);
}

const getMetrics = (state: ProgramState, exercise: string, property: keyof ExerciseScheme, day: number) => {
  const schemes = state.program[day];
  const index = schemes.findIndex(s => s.exercise === exercise);
  if (index < 0) return;
  const metrics = schemes[index][property];
  return metrics;
}

