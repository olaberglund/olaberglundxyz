import { Timestamp } from "firebase/firestore";

// A program, consists of many program days
export type Program = {
  // days: ProgramDay[];
  createdAt: Timestamp;
}

// a day of a program, consists of exercises
export type ProgramDay = {
  exercises: ExerciseScheme[];
}

// One exercise, with rep/set scheme and starting weight
export type ExerciseScheme = {
  exercise: string,
  sets: string | undefined,
  reps: string | undefined,
  kg: string | undefined,
  rpe: string | undefined
};