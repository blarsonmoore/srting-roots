import React from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import ProfileContent from '../ProfileContent/ProfileContent';

import './UserProfile.css';

const UserProfile = () => {
  return (
    <div>
      <ProfileContent />
      <div className="fixed-action-btn">
        <h5> Add New Instrument</h5>
        <Link to="/instrument/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
