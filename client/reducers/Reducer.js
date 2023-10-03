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
  game: false, // false: game is not running, true; game is running
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
    })
    .addCase(actions.changeGameStatus, (state, action) => {
      state.game ? (state.game = false) : (state.game = true);
    })
    .addCase(actions.updateGuess, (state, action) => {
      console.log('state.userInput:', state.userInput);
      console.log('action.payload.newGuess:', action.payload.newGuess);
      state.userInput = action.payload.newGuess;
    });
});

export { getData };

export default gameReducer;
