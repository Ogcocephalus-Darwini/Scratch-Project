import React from 'react';
import { useAppContext } from '../context/appContext.jsx';
import Loading from './Loading.jsx';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { logout } = useAppContext();
  const { pathname } = useLocation();

  return (
    <div className="header">
      <Loading isHeader={true} />
      <div>
        {pathname !== '/profile' ? (
          <Link to="/profile" className="button">
            Profile
          </Link>
        ) : (
          <Link to="/" className="button">
            Workouts
          </Link>
        )}
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
