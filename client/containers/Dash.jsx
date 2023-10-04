import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  newWord,
  changeGameStatus,
  updateGuess,
  pass,
  fail,
} from '../actions/actions.js';
import Player from './Player.jsx';
import Input from './Input.jsx';
// import { fetchCat } from '../reducers/catReducer.js';
// reducers we use hwere

const Dash = () => {
  const currentWord = useSelector((state) => state.currentWord);
  const userInput = useSelector((state) => state.userInput);
  const game = useSelector((state) => state.game);
  const numTries = useSelector((state) => state.numTries);
  const dispatch = useDispatch();

  const startGame = async () => {
    //get word from dictionary API
    const getWordUrl = 'https://wordsapiv1.p.rapidapi.com/words/?random=true';
    const getWordOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '787dc62d1bmsh95c2d63b7c00601p1f27b5jsnd8acffac421f',
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
      },
    };

    try {
      const getWordResponse = await fetch(getWordUrl, getWordOptions);
      let getWordResult = await getWordResponse.text();
      console.log(getWordResult);
      const word = JSON.parse(getWordResult).word;
      dispatch(changeGameStatus());
      dispatch(newWord(word));
    } catch (error) {
      console.error(error);
    }
  };
  const checkGuess = async () => {
    console.log(numTries);
    if (numTries < 2 && currentWord !== userInput) {
      dispatch(fail());
    } else if (currentWord === userInput) {
      dispatch(pass());
      dispatch(changeGameStatus());
    } else if (numTries === 2) {
      alert(`The word was ${currentWord}!`);
      dispatch(fail());
      dispatch(changeGameStatus());
    }
    dispatch(updateGuess(''));
  };

  return (
    <div>
      {!game ? (
        <button
          id="startGame"
          type="button"
          className="button"
          onClick={startGame}
        >
          Start Game
        </button>
      ) : null}
      <p>The word is {currentWord}</p>
      {game ? <Player word={currentWord} /> : null}
      {game ? <Input word={currentWord} /> : null}
      {game ? <button onClick={checkGuess}>Check</button> : null}
    </div>
  );
};

export default Dash;
