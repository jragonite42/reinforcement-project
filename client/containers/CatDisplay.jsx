import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCat } from '../reducers/catReducer.js';
import catImage from '../assets/images/kitty.png';
import bgImage from '../assets/images/bg.jpg';

const CatDisplay = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCat());
  }, []);

  const catMood = useSelector(state => state.cats);

  console.log('KittyMood?', catMood);
  //console.log('Hungry?', catMood.hungry);

  return (
    <div className='catdisplay'>
      <img id='bgimage' src={bgImage} alt="" />
      <img id='catimage' src={catImage}/>
      <div className='mood-icon-container'>
        <img />
        <img />
        <img />
        <img />
      </div>
    </div>
  )
}

export default CatDisplay;
