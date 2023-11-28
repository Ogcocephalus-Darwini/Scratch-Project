import React from 'react';
import { useAppContext } from '../context/appContext.jsx';
import Loading from '../components/Loading.jsx';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAppContext();
  const navigate = useNavigate();
  // console.log('Protected Route User: ', user);

  if (isLoading) {
    return <Loading />;
  }

  if (!user) {
    // console.log('Kicked out');
    navigate('/landing');
  }

  return children;
};

export default ProtectedRoute;
