import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateGuess } from '../actions/actions.js';

const Input = (props) => {
  const { word } = props;
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
      <input
        id="guess"
        onChange={handleInputChange}
        value={userInput}
        type="text"
      ></input>
    </div>
  );
};

export default Input;
