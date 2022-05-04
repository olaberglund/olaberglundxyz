export enum ActionType {
  RemoveExercise,
  AddExercise,
  SetCurrentDay,
  SetCurrentWeek,
  AddDay,
  RemoveDay,
  Reset,
  SetSets,
  SetReps,
  SetRPE,
  SetWeight,
}

// interface: way of doing something
// type: a data type

export interface SetSets {
  type: ActionType.SetSets;
  payload: {
    value: string,
    exercise: string,
    property: string,
  };
}

export interface SetReps {
  type: ActionType.SetReps;
  payload: {
    value: string,
    exercise: string,
    property: string,
  };
}

export interface SetRPE {
  type: ActionType.SetRPE;
  payload: {
    value: string,
    exercise: string,
    property: string,
  };
}

export interface SetWeight {
  type: ActionType.SetWeight;
  payload: {
    value: string,
    exercise: string,
    property: string,
  };
}

export interface RemoveExercise {
  type: ActionType.RemoveExercise;
  payload: string;
}

export interface AddExercise {
  type: ActionType.AddExercise;
  payload: string;
}

export interface SetCurrentDay {
  type: ActionType.SetCurrentDay;
  payload: number;
}

export interface SetCurrentWeek {
  type: ActionType.SetCurrentWeek;
  payload: number;
}

export interface AddDay {
  type: ActionType.AddDay;
}

export interface RemoveDay {
  type: ActionType.RemoveDay;
}

export interface Reset {
  type: ActionType.Reset;
}

export type ProgramActions =
  | RemoveExercise
  | AddExercise
  | SetCurrentDay
  | SetCurrentWeek
  | AddDay
  | RemoveDay
  | SetRPE
  | SetReps
  | SetSets
  | SetWeight
  | Reset;
