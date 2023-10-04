import * as types from '../constants/types.js';
import { createAction } from '@reduxjs/toolkit';

//actions needed
export const changeGameStatus = createAction(types.GAME);
export const score = createAction(types.SCORE); // Returns the current score?
export const pass = createAction(types.PASS); // What happens if you spell correctly - add to score in state
export const fail = createAction(types.FAIL); // What happens if you don't spell correctly - subtract to score in state
export const save = createAction(types.SAVE); //save score to db
export const newWord = createAction('game/newWord', (word) => ({
  payload: { newWord: word },
}));
export const updateGuess = createAction('game/newGuess', (guess) => ({
  payload: { newGuess: guess },
}));
export const incrementTries = createAction(types.INCREMENTTRIES);
export const resetTries = createAction(types.RESETTRIES);
// export const newWord = createAction(types.NEWWORD);

export const signIn = (email, password) => ({
  type: SIGN_IN,
  payload: { email, password },
});

export const signUp = (email, password, name) => ({
  type: SIGN_UP,
  payload: { email, password, name },
});
