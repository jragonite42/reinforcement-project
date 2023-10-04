import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateGuess } from '../actions/actions.js';
import TextField from '@mui/material/TextField';

const Input = () => {
  const userInput = useSelector((state) => state.userInput);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    dispatch(updateGuess(newValue));
  };

  return (
    <div>
      <label htmlFor="guess">Input your guess below:</label>
      <br></br>
      <TextField
        id="guess"
        variant="outlined"
        onChange={handleInputChange}
        value={userInput}
        type="text"
      ></TextField>
    </div>
  );
};

export default Input;
