import React, { useState, useEffect } from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="profile">
      <img src={user.avatar} alt={`${user.name}'s avatar`} />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <div className="contact-info">
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
    </div>
  );
};

export default UserProfile;
