import React, { useContext, useState, useEffect } from 'react';
import { ProgramContext } from '../state/context';
import { getTodayWithWeekOffset } from '../state/helpers';
import { setCurrentWeek } from '../state/reducer';
import {
  Container,
  Tabs,
  TabWindow,
  WindowTab,
} from '../styled';
import DayView from './DayView';
import WeekView from './WeekView';

const ProgramForm: React.FC = ({ children }) => {
  const { state, dispatch } = useContext(ProgramContext);
  const [days, setDays] = useState<JSX.Element[]>([]);

  const handleWeekClick = (index: number) => () => {
    if (index === state.currentWeek) return;
    dispatch(setCurrentWeek(index));
  };

  useEffect(() => {
    const totalDays = state.daysPerWeek * state.weeks;
    const updatedDays = [...Array(totalDays).keys()]
      .map(day => {
        console.log(day);
        return (
          <DayView key={day} day={day} />
        )
      });
    setDays(updatedDays)
  }, [state.daysPerWeek, state.weeks])


  return (
    <Container>
      <TabWindow vertical>
        <Tabs vertical>
          {[...Array(state.weeks).keys()].map(index => (
            <WindowTab
              active={state.currentWeek === index}
              key={index}
              onClick={handleWeekClick(index)}
            >
              {`v. ${index + 1}`}
            </WindowTab>
          ))}
        </Tabs>
        <WeekView>
          {days.length && days[getTodayWithWeekOffset(state)]}
        </WeekView>
      </TabWindow>
      {/* stepper buttons */}
      {children}
    </Container>
  );
};

export default ProgramForm;

