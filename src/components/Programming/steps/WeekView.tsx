import React, { useContext, useEffect, useState } from 'react';
import { ProgramContext } from '../state/context';
import { setCurrentDay } from '../state/reducer';
import { Tabs, TabWindow, WindowTab } from '../styled';

const WeekView: React.FC = ({ children }) => {
  const { state, dispatch } = useContext(ProgramContext);

  const handleDayClick = (index: number) => () => {
    if (index === state.currentDay) return;
    dispatch(setCurrentDay(index));
  };

  return (
    <TabWindow>
      <Tabs>
        {[...Array(state.daysPerWeek).keys()].map(day => {
          return (
            <WindowTab
              active={state.currentDay === day}
              key={day}
              onClick={handleDayClick(day)}
            >
              Dag {day % state.daysPerWeek + 1}
            </WindowTab>
          )
        })}
      </Tabs>
      {/* days.length && days[state.currentDay] */}
      {children}
    </TabWindow>
  )
};

export default WeekView;
