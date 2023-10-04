import React from 'react';
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
import '../stylesheets/dashboard.css';
import Button from '@mui/material/Button';

const Dash = () => {
  const currentWord = useSelector((state) => state.currentWord);
  const userInput = useSelector((state) => state.userInput);
  const game = useSelector((state) => state.game);
  const numTries = useSelector((state) => state.numTries);
  const score = useSelector((state) => state.score);

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
      const word = JSON.parse(getWordResult).word;
      console.log('The word is', word);
      dispatch(changeGameStatus());
      dispatch(newWord(word));
    } catch (error) {
      console.error(error);
    }
  };
  const checkGuess = async () => {
    if (numTries < 2 && currentWord !== userInput) {
      dispatch(fail());
    } else if (currentWord === userInput) {
      alert(`You got it right! The word was ${currentWord}!`);
      dispatch(pass());
      dispatch(changeGameStatus());
    } else if (numTries === 2) {
      alert(`Better luck next time. The word was ${currentWord}!`);
      dispatch(fail());
      dispatch(changeGameStatus());
    }
    dispatch(updateGuess(''));

    //update user's score in database
    try {
      const res = await fetch('/user/updateScore', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ score: score }),
      });
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="gameElements">
      {!game ? (
        <Button
          id="startGame"
          variant="contained"
          className="button"
          onClick={startGame}
        >
          Start Game
        </Button>
      ) : null}
      {game ? <Player word={currentWord} /> : null}
      <br></br>
      {game ? <Input /> : null}
      {game ? (
        <Button variant="contained" onClick={checkGuess}>
          Check
        </Button>
      ) : null}
    </div>
  );
};

export default Dash;
