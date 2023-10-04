import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../reducers/Reducer.js';
import '../stylesheets/nav.css';

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
      <div className="gameRules">
        <h4>Game Rules:</h4>
        <p>
          Click 'Start Game' and do your best to spell the word as heard in the
          audio clip. For every word you spell correctly, you will earn 1 point.
          For every word you misspell, you will lose 1 point. Max 3 tries per
          word.
        </p>
        <p>Happy spelling!</p>
      </div>
    </div>
  );
};

export default Nav;
