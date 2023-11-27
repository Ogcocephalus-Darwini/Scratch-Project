import React from 'react';
import { useAppContext } from '../context/appContext.jsx';
import Loading from '../components/Loading.jsx';

const UserProfile = () => {
  const { user, isLoading } = useAppContext();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="profile col-center">
      {user.username !== 'test' && (
        <div className="streak-container">
          <h3 className="streak-text">Current Workout Streak: </h3>
          <img
            className="streak-gif"
            src="https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/cs_scratch/28gif.gif"
            alt="streak"
          />
          <h3 className="streak-text">Days. Niiiice!</h3>
        </div>
      )}
      username:
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
