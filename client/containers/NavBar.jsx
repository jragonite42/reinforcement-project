import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { feed, heal, clean, groom } from '../actions/actions.js';

const NavBar = () => {

  const dispatch = useDispatch();
  const cat = useSelector(state => state.cats);

  const feedHandler = async (e) => {
    if (cat.hungry === true) {
      const result = await fetch('/api/feed', {
        method: 'PUT',
        body: JSON.stringify({
          hungry: false,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const hungerInfo = await result.json();
      dispatch(feed(hungerInfo));
    } else {
      console.log('The cat is not hungry!')
    };
  };

  const cleanHandler = async (e) => {
    if (cat.clean === false) {
      const result = await fetch('/api/clean', {
        method: 'PUT',
        body: JSON.stringify({
          clean: true,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const litterInfo = await result.json();
      dispatch(clean(litterInfo));
    } else {
      console.log('The cat litter is clean!')
    };
  };

  const groomHandler = async (e) => {
    if (cat.groomed === false) {
      const result = await fetch('/api/groom', {
        method: 'PUT',
        body: JSON.stringify({
          groom: true,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const groomInfo = await result.json();
      dispatch(groom(groomInfo));
    } else {
      console.log('The cat does not need grooming!')
    };
  };

  const healHandler = async (e) => {
    if (cat.healthy === false) {
      const result = await fetch('/api/healthy', {
        method: 'PUT',
        body: JSON.stringify({
          healthy: true,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const healthInfo = await result.json();
      dispatch(heal(healthInfo));
    } else {
      console.log('The cat is not sick!')
    };
  };

  return (
    <div>
      <button id="feed" type="button" className="button" onClick={feedHandler}>
        <img src="https://cdn.discordapp.com/attachments/384155828715782145/1143216382838845500/feed.png" />
      </button>
      <button id="clean" type="button" className="button" onClick={cleanHandler}>
        <img src="https://cdn.discordapp.com/attachments/384155828715782145/1143216382528462980/clean.png" />
      </button>
      <button id="groom" type="button" className="button" onClick={groomHandler}>
        <img src="https://cdn.discordapp.com/attachments/384155828715782145/1143216382197117040/groom.png" />
      </button>
      <button id="health" type="button" className="button" onClick={healHandler}>
        <img src="https://cdn.discordapp.com/attachments/384155828715782145/1143216381886734407/health.png" />
      </button>
      <button id="log" type="button" className="button">
        <img src="https://media.discordapp.net/attachments/384155828715782145/1143216381563777124/log.png" />
      </button>
    </div>
  );
};

export default NavBar;
