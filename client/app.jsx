import React from 'react';
import MainContainer from './containers/MainContainer'; // Import your MainContainer component
import Welcome from './containers/Welcome'; // Import your MainContainer component
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Welcome /> } />
          <Route path="/dashboard" element={ <MainContainer /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
