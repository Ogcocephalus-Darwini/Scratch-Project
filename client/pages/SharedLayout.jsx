import React from 'react';
import Header from '../components/Header.jsx';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div className="shared-layout">
      <Header />
      <div className="shared-layout">
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
