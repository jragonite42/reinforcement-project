import React from 'react';
import MainContainer from './containers/MainContainer';
import Welcome from './containers/Welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';

function App() {
  return (
    <div className="backgroundContainer">
      <div className="centerErrythan">
        <h1>SpellSmith: Word Forge</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/dashboard" element={<MainContainer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
