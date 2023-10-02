import * as actions from '../actions/actions.js';
import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';

const fetchCat = createAsyncThunk('cat/fetchCat', async () => {
  try {
    const res = await fetch('/api/cat');
    const cat = await res.json();
    return cat;
  } catch (err) {
    throw err;
  }
});

const initialState = {
  hungry: null,
  healthy: null,
  clean: null,
  groomed: null,
};

const catReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCat.fulfilled, (state, action) => {
      const { hungry, healthy, clean, groom } = action.payload;
      state.hungry = hungry;
      state.healthy = healthy;
      state.clean = clean;
      state.groomed = groom;
    })
    .addCase(actions.feed, (state, action) => {
      state.hungry = action.payload.fed;
    })
    .addCase(actions.heal, (state, action) => {
      state.healthy = action.payload.healthy;
    })
    .addCase(actions.clean, (state, action) => {
      state.clean = action.payload.clean;
    })
    .addCase(actions.groom, (state, action) => {
      state.groomed = action.payload.groom;
    });
});

export { fetchCat };

export default catReducer;
