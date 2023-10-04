import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import process from 'dotenv';
// dotenv.config();

const Nav = () => {
  const name = useSelector((state) => state.name);
  const score = useSelector((state) => state.score);

  return (
    <div>
      <p>Welcome, {name}!</p>
      <p>You have {score} points.</p>
      <br></br>
    </div>
  );
};

export default Nav;
