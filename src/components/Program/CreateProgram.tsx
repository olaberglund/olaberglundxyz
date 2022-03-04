import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Form } from './CreateProgram.styled';
import { FormControl, FormHelperText, Input, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

function CreateProgram() {
  const [exercise, setExercise] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setExercise(event.target.value as string);
  };

  const exercises = [
    'squat',
    'bench',
    'deadlift'
  ]

  return (
    <Form>
      <FormControl style={{ width: '100%' }}>
        <InputLabel>Programmets namn</InputLabel>
        <Input />
      </FormControl>
      <FormControl style={{ width: '100%' }}>
        <Select
          value={exercise}
          label="Yooooo"
          onChange={handleChange}
        >
          {exercises.map(exercise => (
            <MenuItem key={exercise} value={exercise}>{exercise}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Form>
  )
}

export default CreateProgram