import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newWord } from '../actions/actions.js';
import dotenv from 'dotenv';
dotenv.config();

const Nav = () => {
  const name = useSelector((state) => state.name);
  const score = useSelector((state) => state.score);
  const dispatch = useDispatch();

  const startGame = async () => {
    //get word from dictionary API
    const getWordUrl = 'https://wordsapiv1.p.rapidapi.com/words/?random=true';
    const getWordOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${process.env.API_KEY}`,
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
      },
    };

    const textToSpeechUrl = `https://voicerss-text-to-speech.p.rapidapi.com/?key=${process.env.API_URL_KEY}`;

    try {
      const getWordResponse = await fetch(getWordUrlurl, getWordOptions);
      const getWordResult = await getWordResponse.text();
      console.log(getWordResult);
      //get speech file of word chosen
      const textToSpeechOptions = {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': `${process.env.API_KEY}`,
          'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com',
        },
        body: new URLSearchParams({
          src: result,
          hl: 'en-us',
          r: '0',
          c: 'mp3',
          f: '8khz_8bit_mono',
        }),
      };

      const textToSpeechResponse = await fetch(
        textToSpeechUrl,
        textToSpeechOptions
      );
      const textToSpeechResult = await textToSpeechResponse.text();
      console.log(textToSpeechResult);
    } catch (error) {
      console.error(error);
    }

    //dispatch action to store word chosen in currentWord
    dispatch(newWord(getWordResult));
  };

  return (
    <div>
      <p>Welcome, {name}!</p>
      <p>You have {score} points.</p>
      <button
        id="startGame"
        type="button"
        className="button"
        onClick={startGame}
      >
        Start Game
      </button>
    </div>
  );
};

export default Nav;
