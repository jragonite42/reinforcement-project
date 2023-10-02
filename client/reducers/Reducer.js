import * as actions from '../actions/actions.js';
import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';

//fetch word from dictionary API
const getScore = createAsyncThunk('' /*whatever the url*/, async () => {});

/*
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  totalPoints: { type: Number },
  gameHistory: { type: Array },
  */
const intialState = {
  name: null,
  password: null,
  score: null,
  totalPoints: null,
  currentWord: null,
  userInput: null,
  // gameHistory: [],
};

const gameReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.pass, (state, action) => {
      state.score++;
    })
    .addCase(actions.fail, (state, action) => {
      // add to game history but thats not implemented
    })
    .addCase(actions.save, (state, action) => {
      // add to game history but thats not implemented
      // push score into database?
    });
});

export default Reducer;
