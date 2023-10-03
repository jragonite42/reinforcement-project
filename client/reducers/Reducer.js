import * as actions from '../actions/actions.js';
import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';

const getData = createAsyncThunk('' /*whatever the url*/, async () => {});

/*
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  totalPoints: { type: Number },
  gameHistory: { type: Array },
  */
const initialState = {
  name: 'Woobae',
  score: 100,
  totalPoints: null,
  currentWord: null,
  userInput: null,
  // gameHistory: [],
};

const gameReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.newWord, (state, action) => {
      console.log('state.currentWord', state.currentWord);
      console.log('action.payload.newWord', action.payload.newWord);
      state.currentWord = action.payload.newWord;
    })
    .addCase(actions.pass, (state, action) => {
      state.score++;
    })
    .addCase(actions.fail, (state, action) => {
      // add to game history but thats not implemented
    })
    .addCase(actions.save, (state, action) => {
      // add to game history but thats not implemented
      // post request to mongoodb with the *total* score?
    });
});

export { getData };

export default gameReducer;
