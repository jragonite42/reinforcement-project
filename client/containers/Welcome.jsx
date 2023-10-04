import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SigninForm from '../components/SignIn';
import SignupForm from '../components/SignUp';

const Welcome = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };
  return (
    <div>
      <button onClick={toggleForm}>
        {isSignUp ? 'Switch to Signin' : 'Switch to Signup'}
      </button>
      {isSignUp ? <SignupForm /> : <SigninForm />}
    </div>
  );
};

export default Welcome;
