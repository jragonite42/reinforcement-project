import * as actions from '../actions/actions.js';
import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';

const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  try {
    const res = await fetch('/user/getUser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    const user = await res.json();
    return user;
  } catch (err) {
    throw err;
  }
});

const initialState = {
  game: false, // false: game is not running, true; game is running
  name: null,
  score: 0,
  currentWord: null,
  userInput: null,
  numTries: 0,
};

const gameReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchUser.fulfilled, (state, action) => {
      const { name, totalPoints } = action.payload;
      state.name = name;
      state.score = totalPoints;
    })
    .addCase(actions.newWord, (state, action) => {
      state.currentWord = action.payload.newWord;
    })
    .addCase(actions.pass, (state, action) => {
      state.score++;
    })
    .addCase(actions.fail, (state, action) => {
      state.score--;
      state.numTries++;
    })
    .addCase(actions.changeGameStatus, (state, action) => {
      state.game ? (state.game = false) : (state.game = true);
      state.numTries = 0;
    })
    .addCase(actions.updateGuess, (state, action) => {
      state.userInput = action.payload.newGuess;
    });
});

export { fetchUser };

export default gameReducer;
