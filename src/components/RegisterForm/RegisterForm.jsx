import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//mui components
import { Stack, TextField } from '@mui/material';
//css style
import './RegisterForm.css';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });

    history.push('/profileForm');
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <div className="registerTitle">
        <h2>Register User</h2>
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
      </div>
      <div className="registerContent">
        <Stack paddingBottom={2}>
          <p> Username </p>
          <label htmlFor="username">
            <TextField
              type="text"
              name="username"
              value={username}
              required
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <p> Password </p>
          <label htmlFor="password">
            <TextField
              type="password"
              name="password"
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </Stack>
      </div>
      <div className="btnContainer">
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
