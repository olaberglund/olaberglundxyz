export type ExerciseScheme = {
  exercise: string,
  sets: string | undefined,
  reps: string | undefined,
  kgs: string | undefined,
  rpe: string | undefined
};

export type ProgramState = {
  /** The current day that is being changed */
  currentDay: number;

  /** The current week that is being changed */
  currentWeek: number;

  /** The number of days per week */
  daysPerWeek: number;

  /** The number of weeks */
  weeks: number;

  /** The program as it stands right now.
   *  The key represents the day and
   *  the value represents that day's exercises.
   */
  program: Record<number, ExerciseScheme[]>;
}

/** The initial state of any program */
export const initialProgramState: ProgramState = {
  currentDay: 0,
  currentWeek: 0,
  daysPerWeek: 3,
  weeks: 4,
  program: {},
}
