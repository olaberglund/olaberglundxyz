import React, { useContext, useState } from "react";
import { ProgramContext } from "../state/context";
import { addExercise, removeExercise, setCurrentDay } from "../state/reducer";
import { Container, Exercise, Flex, List, ListItem, Program, ProgramWindow, RemoveButton, Tabs, Title, TitleWrapper, WindowTab } from "../styled";

const ExerciseForm: React.FC = () => {
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
    "seated row",
    "tricep pushdown",
    "sumo deadlift",
    "front squat",
    "jm press",
    "sled push",
    "bulgarian split squat",
  ].sort();

  const handleAddClick = (exercise: string) => () => {
    dispatch(addExercise(exercise));
  };

  const handleDeleteClick = (exercise: string) => {
    dispatch(removeExercise(exercise));
  };

  const tabs = [...Array(state.daysPerWeek).keys()].map(i => ({ title: `Dag ${i + 1}`, content: state.program[i + 1] }));

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

export default ExerciseForm;
