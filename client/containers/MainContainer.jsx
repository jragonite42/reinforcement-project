import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from './Nav';
import Dash from './Dash';

const MainContainer = () => {
  return (
    <div>
      <Nav />
      <Dash />
    </div>
  );
};

export default MainContainer;
