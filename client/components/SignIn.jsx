import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInAsync } from '../reducers/authReducer';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
      <TextField
        id="outlined-basic"
        sx={{ width: '100%', mb: 4 }}
        label="username"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        sx={{ width: '100%', mb: 4 }}
        label="password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Sign In
      </Button>
    </form>
  );
};

export default SigninForm;
