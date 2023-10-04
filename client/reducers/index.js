import { combineReducers } from 'redux';
import gameReducer from './Reducer';
import authReducer from './authReducer';

const reducers = combineReducers({ 
  auth: authReducer,
  games: gameReducer
});

export default reducers;
