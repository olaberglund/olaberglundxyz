import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Center, Layout, List, ListItem, } from './CreateProgram.styled';
import { SelectChangeEvent } from '@mui/material';

function CreateProgram() {
  const [exercise, setExercise] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setExercise(event.target.value as string);
  };

  const exercises = [
    'squat',
    'bench',
    'deadlift',
    'overhead press',
    'dumbbell press',
    'incline dumbbell press',
    'romanian deadlifts',
    'deadlifts pause off floor',
    'bicep curls',
    'chins',
    'pullups',
    'dips',
    'tricep pushdown',
    'sumo deadlift',
    'front squat',
    'JM press',
    'sled push'
  ]

  return (
    <Layout>
      <Center>
        <List>
          {exercises.map(exercise => (
            <ListItem key={exercise}>
              {exercise}
            </ListItem>
          ))}
        </List>
      </Center>
      <Center>
        <List>
          {exercises.map(exercise => (
            <ListItem key={exercise}>
              {exercise}
            </ListItem>
          ))}
        </List>
      </Center>
    </Layout>
  )
}

export default CreateProgram