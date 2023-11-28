import React, { userReducer, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import actions from './actions';
import reducer from './reducer';

const initialState = {
  isLoading: false,
  user: null,
  currentWorkout: null,
  exercises: [],
};

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true,
  });

  const startLoading = () => {
    dispatch({ type: actions.LOADING });
  };

  const stopLoading = () => {
    dispatch({ type: actions.STOP_LOADING });
  };

  const login = async (username, password) => {
    console.log('💥 Login - AppContext');

    try {
      startLoading();
      const response = await authFetch.post('/auth/login', {
        username,
        password,
      });
      setTimeout(() => {
        dispatch({ type: actions.LOGIN, payload: { user: response.data } });
      }, 5000);
    } catch (err) {
      console.log(err);
      setTimeout(() => {
        stopLoading();
      }, 1000);
    }
  };

  const signup = async (username, password, passwordConfirm) => {
    console.log('💥 Signup - AppContext');
    if (password !== passwordConfirm) return;

    try {
      startLoading();
      const response = await authFetch.post('/auth/signup', {
        username,
        password,
        passwordConfirm,
      });
      setTimeout(() => {
        dispatch({ type: actions.SIGN_UP, payload: { user: response.data } });
      }, 5000);
    } catch (err) {
      console.log(err);
      setTimeout(() => {
        stopLoading();
      }, 1000);
    }
  };

  const logout = async () => {
    console.log('💥 Logout - AppContext');
    try {
      startLoading();
      const response = await authFetch.post('/auth/logout');
      dispatch({ type: actions.LOGOUT });
      stopLoading();
    } catch (err) {
      console.log(err);
      stopLoading();
    }
  };

  const getCurrentUser = async () => {
    console.log('💥 Get Current User');
    try {
      startLoading();
      const response = await authFetch('/me');
      // console.log(response.data);
      if (!response.data.username) {
        // console.log('getCurrentUser logout');
        return logout();
      }
      dispatch({ type: actions.LOGIN, payload: { user: response.data } });
    } catch (err) {
      // console.log(err);
      stopLoading();
    }
  };

  const createWorkout = async () => {
    console.log('💥 Create Workout - appContext');
    try {
      startLoading();
      const response = await authFetch.post('/workout');
      console.log(response);
      dispatch({ type: actions.CREATE_WORKOUT, payload: { currentWorkout: response.data } });
      stopLoading();
    } catch (err) {
      console.log(err);
      stopLoading();
    }
  };

  const createExercise = async (exerciseName) => {
    try {
      const response = await authFetch.post('/workout/exercise', {
        workoutId: state.currentWorkout._id,
        exerciseName,
      });
      dispatch({ type: actions.CREATE_EXERCISE, payload: { exercise: response.data } });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        login,
        signup,
        logout,
        startLoading,
        stopLoading,
        getCurrentUser,
        createWorkout,
        createExercise,
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
