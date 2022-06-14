import React, { useContext } from 'react';
import { ProgramContext } from '../state/context';
import { getRepsOfExerciseOnDay, getRPEOfExerciseOnDay, getSetsOfExerciseOnDay, getWeightOfExerciseOnDay } from '../state/helpers';
import { setReps, setRPE, setSets, setWeight } from '../state/reducer';
import { Exercise, Flex, Program, Title, TitleWrapper } from '../styled';
import SchemeField from './SchemeField';

type Props = {
  day: number;
}

const DayView: React.FC<Props> = ({ day }) => {
  const { state, dispatch } = useContext(ProgramContext);
  const schemeFields = [
    { title: 'Sets', initValue: getSetsOfExerciseOnDay, setter: setSets },
    { title: 'Reps', initValue: getRepsOfExerciseOnDay, setter: setReps },
    { title: 'Kgs', initValue: getWeightOfExerciseOnDay, setter: setWeight },
    { title: 'RPE', initValue: getRPEOfExerciseOnDay, setter: setRPE }
  ]

  return (
    <Program>
      {state.program[day]?.map((scheme, index) => (
        <Exercise key={scheme.exercise}>
          <Flex>
            <TitleWrapper>
              <Title>{`${index + 1}. ${scheme.exercise}`}</Title>
              {schemeFields.map(field => (
                <SchemeField
                  key={field.title}
                  initialValue={
                    field.initValue(state, scheme.exercise, day) ?? ' '
                  }
                  onBlur={(sets: string) =>
                    dispatch(field.setter(scheme.exercise, sets))
                  }
                >
                  {field.title}
                </SchemeField>
              ))}
            </TitleWrapper>
          </Flex>
          <hr />
        </Exercise>
      ))
      }
    </Program >
  )
}

export default DayView;
