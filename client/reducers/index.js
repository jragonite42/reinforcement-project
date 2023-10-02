import { combineReducers } from 'redux';
import catReducer from './catReducer.js';

const reducers = combineReducers({ cats: catReducer });

export default reducers;