import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../reducers/Reducer.js';

// import process from 'dotenv';
// dotenv.config();

const Nav = () => {
  const name = useSelector((state) => state.name);
  const score = useSelector((state) => state.score);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div>
      <p>Welcome, {name}!</p>
      <p>You have {score} points.</p>
      <br></br>
    </div>
  );
};

export default Nav;
