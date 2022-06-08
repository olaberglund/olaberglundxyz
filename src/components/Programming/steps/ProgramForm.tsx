import React, { useContext } from 'react';
import { ProgramContext } from '../state/context';
import { getTodayWithWeekOffset, getSetsOfExerciseOnDay } from '../state/helpers';
import { setCurrentDay, setCurrentWeek, setSets } from '../state/reducer';
import {
  Container,
  Program,
  Exercise,
  Tabs,
  Flex,
  TitleWrapper,
  Title,
  TabWindow,
  WindowTab,
} from '../styled';
import SchemeField from './SchemeField';

const ProgramForm: React.FC = ({ children }) => {
  const { state, dispatch } = useContext(ProgramContext);
  const handleDayClick = (index: number) => () => {
    if (index === state.currentDay) return;
    dispatch(setCurrentDay(index));
  };
  const handleWeekClick = (index: number) => () => {
    if (index === state.currentWeek) return;
    dispatch(setCurrentWeek(index));
  };

  /** All weeks' days */
  // TODO: Fix running each time a new day is clicked
  const days = [...Array(state.daysPerWeek * state.weeks).keys()].map((day) => {
    console.log("Skapar dag: " + day)
    return {
      title: `Dag ${(day % state.daysPerWeek) + 1}`,
      content: (
        <Program>
          {state.program[day]?.map((scheme, index) => (
            <Exercise key={scheme.exercise}>
              <Flex>
                <TitleWrapper>
                  <Title>{`${index + 1}. ${scheme.exercise}`}</Title>
                  <SchemeField
                    key={day}
                    initialValue={
                      getSetsOfExerciseOnDay(state, scheme.exercise, day) ?? ' '
                    }
                    onBlur={(sets: string) =>
                      dispatch(setSets(scheme.exercise, sets))
                    }
                  >
                    Sets
                  </SchemeField>
                </TitleWrapper>
              </Flex>
              <hr />
            </Exercise>
          ))}
        </Program>
      ),
    };
  });

  /** All weeks' programs */
  const weeks = [...Array(state.weeks).keys()].map((week) => ({
    title: `v. ${week + 1}`,
    content: (
      <TabWindow>
        <Tabs>
          {days
            .slice(week * state.daysPerWeek, state.daysPerWeek * (week + 1))
            .map((tab, index) => (
              <WindowTab
                active={state.currentDay === index}
                key={tab.title}
                onClick={handleDayClick(index)}
              >
                {tab.title}
              </WindowTab>
            ))}
        </Tabs>
        {days[getTodayWithWeekOffset(state)].content}
      </TabWindow>
    ),
  }));

  return (
    <Container>
      <TabWindow vertical>
        <Tabs vertical>
          {weeks.map((tab, index) => (
            <WindowTab
              active={state.currentWeek === index}
              key={tab.title}
              onClick={handleWeekClick(index)}
            >
              {tab.title}
            </WindowTab>
          ))}
        </Tabs>
        {weeks[state.currentWeek].content}
      </TabWindow>
      {/* stepper buttons */}
      {children}
    </Container>
  );
};

export default ProgramForm;

