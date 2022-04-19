import React, { useState } from "react";
import styled from "styled-components";
import { Exercise, Flex, List, ListItem, Program, SchemeInput } from "./styled";
import { TabWindow, WindowTab } from "./Tabber";

const ProgramForm: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleClick = (index: number) => () => setCurrentTab(index);
  const [chosen, setChosen] = useState<string[][]>([[], [], []]);
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
    if (chosen[currentTab].includes(exercise)) return;
    const changed = chosen.slice(0);
    changed[currentTab].push(exercise);
    setChosen(changed);
  };

  const handleDeleteClick = (exercise: string) => {
    const index = chosen[currentTab].indexOf(exercise);
    if (index !== -1) {
      const filtered = chosen[currentTab].filter((e, i) => i !== index);
      const changed = chosen.slice(0);
      changed[currentTab] = filtered;
      setChosen(changed);
    }
  };

  const tabs = [
    {
      title: "Dag 1",
      content: chosen[0],
    },
    {
      title: "Dag 2",
      content: chosen[1],
    },
    {
      title: "Dag 3",
      content: chosen[2],
    },
  ];

  return (
    <Container>
      <ProgramWindow>
        <Tabs>
          {tabs.map((tab, index) => (
            <DayTab onClick={handleClick(index)}>{tab.title}</DayTab>
          ))}
        </Tabs>
        <Program>
          {chosen[currentTab].map((e) => (
            <Exercise>
              <Flex>
                <span>{e}</span>
                <Scheme>Sets: </Scheme>
                <Scheme>Reps: </Scheme>
                <button type="button" onClick={() => handleDeleteClick(e)}>
                  X
                </button>
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

const Container = styled.div`
  background-color: #fff;
  display: flex;
  color: #000;
  width: 100%;
  height: 500px;
`;
const ProgramWindow = styled(TabWindow)`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  width: 100%;
  flex: 3;
`;

const Tabs = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const DayTab = styled(WindowTab)`
  display: flex;
  place-content: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.primary};
  :hover {
    background-color: ${({ theme }) => theme.tertiary};
    cursor: pointer;
  }
`;

const Scheme: React.FC = ({ children }) => {
  return (
    <div>
      <span>{children}</span>
      <SchemeInput />
    </div>
  );
};

export default ProgramForm;
