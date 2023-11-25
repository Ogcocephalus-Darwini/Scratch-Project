import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const [userNameInput, setUsername] = useState('');

  const [passwordInput, setPassword] = useState('');

  const handleUsernameInput = (event) => {
    return setUsername(event.target.value);
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUpClick = () => {
    signUP(userNameInput, passwordInput);
  };

  const handleLoginClick = () => {
    login(userNameInput, passwordInput);
  };

  const signUP = (uName, pWord) => {
    fetch('/', {
      method: 'POST',
      body: { uName, pWord },
    });
  };

  const login = (uName, pWord) => {
    fetch('/', {
      method: 'GET',
      body: { uName, pWord },
    });
  };

  return (
    <div>
      <h1>Login</h1>

      <label>
        Username:
        <input onChange={handleUsernameInput} value={userNameInput} type="text" name="name" />
      </label>

      <label>
        Password:
        <input onChange={handlePasswordInput} value={passwordInput} type="text" name="name" />
      </label>

      <button id="signup" onClick={handleClick}>
        Sign Up
      </button>
      <button id="login" onClick={handleClick}>
        Login
      </button>

      <h1> </h1>
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
