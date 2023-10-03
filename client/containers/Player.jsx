import React, { useState, useEffect } from 'react';

const Player = ({ word }) => {
  const [audioBlob, setAudioBlob] = useState(null);

  useEffect(() => {
    // Function to convert ReadableStream to Blob
    async function streamToBlob(stream) {
      const reader = stream.getReader();
      const chunks = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
      }

      return new Blob(chunks);
    }

    // Fetch the audio data as a ReadableStream
    const textToSpeechUrl = `https://voicerss-text-to-speech.p.rapidapi.com/?key=f23ce96978664e71bfeb71fb62e63b06`;
    const textToSpeechOptions = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '787dc62d1bmsh95c2d63b7c00601p1f27b5jsnd8acffac421f',
        'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com',
      },
      body: new URLSearchParams({
        src: word,
        hl: 'en-us',
        r: '0',
        c: 'mp3',
        f: '8khz_8bit_mono',
      }),
    };

    fetch(textToSpeechUrl, textToSpeechOptions)
      .then((response) => streamToBlob(response.body))
      .then((blob) => {
        setAudioBlob(blob);
      })
      .catch((error) => {
        console.error('Error fetching audio:', error);
      });
  }, [word]);

  return (
    <div>
      <audio controls>
        {audioBlob && (
          <source
            src={URL.createObjectURL(audioBlob)}
            type="audio/mpeg"
          ></source>
        )}
      </audio>
    </div>
  );
};

export default Player;
