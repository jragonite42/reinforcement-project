import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Nav from './Nav';
import Dash from './Dash';
import Welcome from './Welcome';
import { signOutAsync } from '../reducers/authReducer';

const MainContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Dispatch the signUpAsync action to sign up the user
      await dispatch(signOutAsync());
      // Handle successful signup, e.g., redirect to another page
      navigate('/');
    } catch (error) {
      // Handle signup error, e.g., display an error message
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleSubmit}> Sign Out </button>
      <Nav />
      <Dash />
    </div>
  );
};

export default MainContainer;
