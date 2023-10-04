import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Nav from './Nav';
import Dash from './Dash';
import { signOutAsync } from '../reducers/authReducer';
import '../stylesheets/dashboard.css';
import Button from '@mui/material/Button';

const MainContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(signOutAsync());
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main-container">
      <div className="main-dashboard">
        <Nav />
        <Dash />
      </div>
      <div className="signout-button">
        <Button onClick={handleSubmit}> Sign Out </Button>
      </div>
    </div>
  );
};

export default MainContainer;
