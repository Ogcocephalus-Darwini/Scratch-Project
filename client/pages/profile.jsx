import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/appContext.jsx';
import Loading from '../components/Loading.jsx';

const UserProfile = () => {
  const { user, isLoading, tempLogin } = useAppContext();

  console.log('UserProfile:', user);

  // TODO TEMPORARY
  // useEffect(() => {
  //   tempLogin();
  // }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="profile">
      test
      {/* <img src={user.avatar} alt={`${user.name}'s avatar`} /> */}
      <h2>{user ? user.username : 'null'}</h2>
      {/* <h2>Hey</h2> */}
      {/* <p>{user.bio}</p> */}
      <div className="contact-info">
        {/* <p>Email: {user.email}</p> */}
        {/* <p>Phone: {user.phone}</p> */}
      </div>
    </div>
  );
};

export default UserProfile;
