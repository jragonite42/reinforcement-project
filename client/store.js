import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers/Reducer';

const store = configureStore({ reducer: reducers });

export default store;
