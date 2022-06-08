import { ExerciseScheme, ProgramState } from './state';

export const getTodayWithWeekOffset = (state: ProgramState) => state.currentWeek * state.daysPerWeek + state.currentDay;

export const getSetsOfExerciseOnDay = (state: ProgramState, exercise: string, day: number) => {
  return getMetrics(state, exercise, 'sets', day);
}

export const getSetsOfExercise = (state: ProgramState, exercise: string) => {
  return getMetrics(state, exercise, 'sets');
}

export const getRepsOfExercise = (state: ProgramState, exercise: string) => {
  return getMetrics(state, exercise, 'reps');
}

export const getRPEOfExercise = (state: ProgramState, exercise: string) => {
  return getMetrics(state, exercise, 'rpe');
}

export const getWeightOfExercise = (state: ProgramState, exercise: string) => {
  return getMetrics(state, exercise, 'kgs');
}

const getMetrics = (state: ProgramState, exercise: string, property: keyof ExerciseScheme, day?: number) => {
  const schemes = state.program[day ?? getTodayWithWeekOffset(state)];
  const index = schemes.findIndex(s => s.exercise === exercise);
  if (index < 0) return;
  const metrics = schemes[index][property];
  return metrics;
}

