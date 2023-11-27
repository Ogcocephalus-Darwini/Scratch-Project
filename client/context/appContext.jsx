import React, { userReducer, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import actions from './actions';
import reducer from './reducer';

const initialState = {
  isLoading: false,
  user: null,
};

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = axios.create({
    baseURL: 'http://localhost:5000/api',
  });

  const login = async (username, password) => {
    console.log('💥 Login - AppContext');

    try {
      dispatch({ type: actions.LOADING });
      const response = await authFetch.post('/auth/login', {
        username,
        password,
      });
      setTimeout(() => {
        dispatch({ type: actions.LOGIN, payload: { user: response.data } });
      }, 1500);
    } catch (err) {
      console.log(err);
      dispatch({ type: actions.STOP_LOADING });
    }
  };

  const signup = async (username, password, passwordConfirm) => {
    console.log('💥 Signup - AppContext');
    if (password !== passwordConfirm) return;

    try {
      dispatch({ type: actions.LOADING });
      const response = await authFetch.post('/auth/signup', {
        username,
        password,
        passwordConfirm,
      });
      setTimeout(() => {
        dispatch({ type: actions.SIGNUP, payload: { user: response.data } });
      }, 1500);
    } catch (err) {
      console.log(err);
      dispatch({ type: actions.STOP_LOADING });
    }
  };

  const logout = () => {
    console.log('💥 Logout - AppContext');
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { initialState, AppContextProvider, useAppContext };
