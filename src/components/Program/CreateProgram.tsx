import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { listStyles } from './CreateProgram.styled';
import { List, ListItemText, ListItemButton, SelectChangeEvent, ListSubheader } from '@mui/material';

function CreateProgram() {
  const [exercise, setExercise] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setExercise(event.target.value as string);
  };

  const exercises = [
    'squat',
    'bench',
    'deadlift',
  ]

  return (
    <>
      <List
        sx={listStyles}
        component="div"
        subheader={
          <ListSubheader sx={{ borderRadius: 3 }} component="div">
            Lägg till övningar
          </ListSubheader>
        }
      >
        {exercises.map(exercise => (
          <ListItemButton key={exercise}>
            <ListItemText primary={exercise} />
          </ListItemButton>
        ))}
      </List>
      <List
        sx={listStyles}
        component="div"
        subheader={
          <ListSubheader sx={{ borderRadius: 3 }} component="div">
            Lägg till övningar
          </ListSubheader>
        }
      >
        {exercises.map(exercise => (
          <ListItemButton key={exercise}>
            <ListItemText primary={exercise} />
          </ListItemButton>
        ))}
      </List>
    </>
  )
}

export default CreateProgram