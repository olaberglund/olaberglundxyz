import React, { useState } from "react";
import styled from "styled-components";
import { ExerciseScheme } from "../../lib/firebase/schemas/programs";
import { Container, Exercise, Flex, List, ListItem, Program, ProgramWindow, RemoveButton, SchemeInput, Tabs, Title, TitleWrapper, WindowTab } from "./styled";

const ProgramForm: React.FC = () => {
  const DAYS = 3;
  const [currentDay, setCurrentDay] = useState(0);
  const handleClick = (index: number) => () => setCurrentDay(index);
  const [chosen, setChosen] = useState<Record<number, string[]>>({});

  // mock
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
    if (chosen[currentDay]) {
      // clicked is already on list? Return.
      if (chosen[currentDay].some(e => e === exercise)) return;

      const changed = chosen[currentDay].slice(0);
      changed.push(exercise);
      setChosen({
        ...chosen,
        [currentDay]: changed
      });
    } else {
      setChosen({
        ...chosen,
        [currentDay]: [exercise]
      });
    }
  };

  const handleDeleteClick = (exercise: string) => {
    if (!chosen) return;

    const index = chosen[currentDay].findIndex(s => s === exercise);
    if (index !== -1) {
      const changed = chosen[currentDay].filter((e, i) => i !== index);
      setChosen({
        ...chosen,
        [currentDay]: changed
      });
    }
  };

  const tabs = [...Array(DAYS).keys()].map(i => ({ title: `Dag ${i + 1}`, content: chosen[i + 1] }));

  return (
    <Container>
      <ProgramWindow>
        <Tabs>
          {tabs.map((tab, index) => (
            <WindowTab key={tab.title} active={currentDay === index} onClick={handleClick(index)}>{tab.title}</WindowTab>
          ))}
        </Tabs>
        <Program>
          {chosen[currentDay]?.map((exercise, index) => (
            <Exercise key={exercise}>
              <Flex>
                <TitleWrapper>
                  <Title>{`${index + 1}. ${exercise}`}</Title>
                  <RemoveButton type="button" onClick={() => handleDeleteClick(exercise)} />
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

export default ProgramForm;

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