import React from 'react';
import { useAppContext } from '../context/appContext.jsx';
import Loading from './Loading.jsx';

const Header = () => {
  const { logout } = useAppContext();

  return (
    <div className="header">
      <Loading isHeader={true} />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Header;
