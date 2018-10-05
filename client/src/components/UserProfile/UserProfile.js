import React from 'react';
import { Link } from 'react-router-dom';
import ProfileContent from '../ProfileContent/ProfileContent';
import InstrumentContent from '../InstrumentContent/InstrumentContent';

import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="container">
    <div className="row">
      <div>
        <ProfileContent />
      </div>
      </div>
      <div className="row">
        <InstrumentContent />
        <div className="fixed-action-btn">
          <h5> Add New Instrument</h5>
          <Link to="/instrument/new" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
      </div>
  );
};

export default UserProfile;
