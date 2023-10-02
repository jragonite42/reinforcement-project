import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CatDisplay from './CatDisplay.jsx';
import NavBar from './NavBar';

const MainContainer = () => {

  return (
    <div>
      <CatDisplay />
      <NavBar />
    </div>
  )
}

export default MainContainer;