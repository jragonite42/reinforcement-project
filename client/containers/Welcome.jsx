import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SigninForm from '../components/SignIn';
import SignupForm from '../components/SignUp';
import Button from '@mui/material/Button';
import '../stylesheets/welcomePage.css';

const Welcome = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };
  return (
    <div className="welcome-container">
      <div className="centered-div">
        {isSignUp ? <SignupForm /> : <SigninForm />}
      </div>
      <div className="centered-div">
        <Button variant="text" onClick={toggleForm}>
          {isSignUp
            ? 'Have an Account? Sign In here'
            : "Don't have an account? Sign Up Here"}
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
