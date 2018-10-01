import React from 'react';
import { Link } from 'react-router-dom';

import './UserProfile.css';

const UserProfile = () => {
  return (
    <div>
      <h1>My Profile</h1>
      <div className="fixed-action-btn">
        <Link to="/instrument/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
