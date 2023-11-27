import React, { useState } from 'react';
import { useAppContext } from '../context/appContext.jsx';
import Loading from '../components/Loading.jsx';

const Landing = () => {
  const { login, signup, isLoading } = useAppContext();
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSubmit = () => {
    if (!username || !password) return;

    if (isLoginPage) {
      login(username, password);
    } else {
      if (password !== passwordConfirm) {
        setPassword('');
        setUsername('');
        setPasswordConfirm('');
        return;
      }
      signup(username, password, passwordConfirm);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="col-center">
      <h1>{isLoginPage ? 'Login' : 'Signup'}</h1>
      <label>
        Username:
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          name="name"
        />
      </label>
      <label>
        Password:
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="text"
          name="name"
        />
      </label>
      {!isLoginPage && (
        <label>
          Confirm Password:
          <input
            onChange={(e) => setPasswordConfirm(e.target.value)}
            value={passwordConfirm}
            type="text"
            name="name"
          />
        </label>
      )}
      {isLoginPage ? (
        <p>
          Not signed up?{' '}
          <span
            className="highlighted"
            onClick={() => {
              setUsername('');
              setPassword('');
              setPasswordConfirm('');
              setIsLoginPage(!isLoginPage);
            }}
          >
            Sign Up
          </span>
        </p>
      ) : (
        <p>
          Already a member?{' '}
          <span
            className="highlighted"
            onClick={() => {
              setUsername('');
              setPassword('');
              setPasswordConfirm('');
              setIsLoginPage(!isLoginPage);
            }}
          >
            Login
          </span>
        </p>
      )}
      <button className="button" id="login" onClick={handleSubmit}>
        {isLoginPage ? 'Login' : 'Signup'}
      </button>
    </div>
  );
};

export default Landing;
