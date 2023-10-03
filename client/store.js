import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './reducers/Reducer';

const store = configureStore({ reducer: gameReducer });

export default store;
