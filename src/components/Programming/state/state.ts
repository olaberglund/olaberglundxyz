export type ExerciseScheme = {
  exercise: string,
  sets: string | undefined,
  reps: string | undefined,
  kg: string | undefined,
  rpe: string | undefined
};

export type ProgramState = {
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
export const initialProgramState: ProgramState = {
  currentDay: 0,
  daysPerWeek: 3,
  program: {},
}