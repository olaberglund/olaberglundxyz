export enum ActionType {
  RemoveExercise,
  AddExercise,
  SetCurrentDay,
  AddDay,
  RemoveDay,
  Reset,
}

// interface: way of doing something
// type: a data type

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
  | AddDay
  | RemoveDay
  | Reset;
