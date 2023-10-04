import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SigninForm from '../components/SignIn';
import SignupForm from '../components/SignUp';
import Button from '@mui/material/Button';

const Welcome = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };
  return (
    <div>
      {isSignUp ? <SignupForm /> : <SigninForm />}
      <Button variant="text" onClick={toggleForm}>
        {isSignUp
          ? 'Have an Account? Sign up here'
          : "Don't have an account? SignIn Here"}
      </Button>
    </div>
  );
};

export default Welcome;
