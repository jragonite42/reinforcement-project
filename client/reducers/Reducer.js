import * as actions from '../actions/actions.js';
import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';

const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  try {
    const res = await fetch('/user/getUser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    // const res = await fetch('/user/getUser');
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
  totalPoints: null,
  currentWord: null,
  userInput: null,
  // gameHistory: [],
  numTries: 0,
};

const gameReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchUser.fulfilled, (state, action) => {
      const { name, totalPoints } = action.payload;
      console.log(name);
      console.log(totalPoints);
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
      // add to game history but thats not implemented
      state.score--;
      state.numTries++;
    })
    .addCase(actions.save, (state, action) => {
      // add to game history but thats not implemented
      // post request to mongoodb with the *total* score?
    })
    .addCase(actions.changeGameStatus, (state, action) => {
      state.game ? (state.game = false) : (state.game = true);
      state.numTries = 0;
    })
    .addCase(actions.updateGuess, (state, action) => {
      console.log('state.userInput:', state.userInput);
      console.log('action.payload.newGuess:', action.payload.newGuess);
      state.userInput = action.payload.newGuess;
    });
});

export { fetchUser };

export default gameReducer;
