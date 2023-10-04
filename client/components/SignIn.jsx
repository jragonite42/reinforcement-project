import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInAsync } from '../reducers/authReducer';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Dispatch the signInAsync action to sign in the user
      await dispatch(signInAsync({ email, password }));
      // Handle successful signin, e.g., redirect to another page
      navigate('/dashboard');
    } catch (error) {
      // Handle signin error, e.g., display an error message
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SigninForm;
