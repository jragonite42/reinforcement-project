import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

// Define an async action to handle sign-in
export const signInAsync = createAsyncThunk('auth/signIn', async ({ email, password }) => {
  try {
    // Replace with your API call to sign in
    const response = await fetch('/user/signin', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('Sign-in failed'); // Handle error appropriately
    }

    const user = await response.json();
    return user;
  } catch (error) {
    throw error;
  }
});

// Define an async action to handle sign-up
export const signUpAsync = createAsyncThunk('auth/signUp', async ({ email, password, name }) => {
  try {
    // Replace with your API call to sign up
    const response = await fetch('/user/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('Sign-up failed'); // Handle error appropriately
    }

    const user = await response.json();
    return user;
  } catch (error) {
    throw error;
  }
});

export const signOutAsync = createAsyncThunk('auth/signOut', async () => {
  try {
    // Replace with your API call to sign up
    const response = await fetch('/user/signout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('Sign-out failed'); // Handle error appropriately
    }
    return null;

  } catch (error) {
    throw error;
  }
});


const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signInAsync.fulfilled, (state, action) => {
      state.user = action.payload;
    })
    .addCase(signUpAsync.fulfilled, (state, action) => {
      state.user = action.payload;
    })
    .addCase(signOutAsync.fulfilled, (state, action) => {
      state.user = action.payload;
    });
});

export const selectUser = (state) => state.auth.user;
export default authReducer;
