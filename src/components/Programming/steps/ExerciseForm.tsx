import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ProgramContext } from "../state/context";
import { addExercise, removeExercise, setCurrentDay } from "../state/reducer";
import { Container, Exercise, Flex, List, ListItem, Program, ProgramWindow, RemoveButton, Tabs, Title, TitleWrapper, WindowTab } from "../styled";

const ExerciseForm: React.FC = () => {
  const DAYS = 3;
  const { state, dispatch } = useContext(ProgramContext);
  const handleClick = (index: number) => () => dispatch(setCurrentDay(index));

  const exercises = [
    "squat",
    "bench",
    "deadlift",
    "overhead press",
    "dumbbell press",
    "incline dumbbell press",
    "romanian deadlifts",
    "deadlifts pause off floor",
    "bicep curls",
    "chins",
    "pullups",
    "dips",
    "tricep pushdown",
    "sumo deadlift",
    "front squat",
    "jm press",
    "sled push",
  ].sort();

  const handleAddClick = (exercise: string) => () => {
    dispatch(addExercise(exercise));
  };

  const handleDeleteClick = (exercise: string) => {
    dispatch(removeExercise(exercise));
  };

  const tabs = [...Array(DAYS).keys()].map(i => ({ title: `Dag ${i + 1}`, content: state.program[i + 1] }));

  return (
    <Container>
      <ProgramWindow>
        <Tabs>
          {tabs.map((tab, index) => (
            <WindowTab key={tab.title} active={state.currentDay === index} onClick={handleClick(index)}>{tab.title}</WindowTab>
          ))}
        </Tabs>
        <Program>
          {state.program[state.currentDay]?.map((scheme, index) => (
            <Exercise key={scheme.exercise}>
              <Flex>
                <TitleWrapper>
                  <Title>{`${index + 1}. ${scheme.exercise}`}</Title>
                  <RemoveButton type="button" onClick={() => handleDeleteClick(scheme.exercise)} />
                </TitleWrapper>
              </Flex>
              <hr />
            </Exercise>
          ))}
        </Program>
      </ProgramWindow>
      <List>
        {exercises.map((exercise) => (
          <ListItem key={exercise} onClick={handleAddClick(exercise)}>
            {exercise}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

const SchemeWrapper = styled.div`
  display: flex;
  gap: 10px;
`

const SchemeRubric = styled.span`
  text-align: right; 
  white-space: nowrap;
`;

export default ExerciseForm;

/*

  let scheme: ExerciseScheme = { exercise: exercise, reps: '', sets: '', kg: '', rpe: '' }

  const setSets = (event: React.ChangeEvent<HTMLInputElement>, exercise: string) => {
    const index = chosen[currentDay].findIndex(s => s.exercise === exercise);
    const changed = chosen[currentDay].slice(0);
    changed[index].sets = event.currentTarget.value;

    setChosen({
      ...chosen,
      [currentDay]: changed
    })
  };

  const setReps = (event: React.ChangeEvent<HTMLInputElement>, exercise: string) => {
    const index = chosen[currentDay].findIndex(s => s.exercise === exercise);
    const changed = chosen[currentDay].slice(0);
    changed[index].reps = event.currentTarget.value;

    setChosen({
      ...chosen,
      [currentDay]: changed
    })
  };

  const setKgs = (event: React.ChangeEvent<HTMLInputElement>, exercise: string) => {
    const index = chosen[currentDay].findIndex(s => s.exercise === exercise);
    const changed = chosen[currentDay].slice(0);
    changed[index].kg = event.currentTarget.value;

    setChosen({
      ...chosen,
      [currentDay]: changed
    })
  };

  */
