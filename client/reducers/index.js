import { combineReducers } from 'redux';
import gameReducer from './Reducer.js';

const reducers = combineReducers({ games: gameReducer });

export default reducers;
