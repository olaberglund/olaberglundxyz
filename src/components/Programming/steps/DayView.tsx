import React, { useContext } from 'react';
import { ProgramContext } from '../state/context';
import { getSetsOfExerciseOnDay } from '../state/helpers';
import { setSets } from '../state/reducer';
import { Exercise, Flex, Program, Title, TitleWrapper } from '../styled';
import SchemeField from './SchemeField';

type Props = {
  day: number;
}

const DayView: React.FC<Props> = ({ day }) => {
  const { state, dispatch } = useContext(ProgramContext);

  return (
    <Program>
      {state.program[day]?.map((scheme, index) => (
        <Exercise key={scheme.exercise}>
          <Flex>
            <TitleWrapper>
              <Title>{`${index + 1}. ${scheme.exercise}`}</Title>
              <SchemeField
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
  )
}

export default DayView;
