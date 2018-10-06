import React from 'react';
import { Link } from 'react-router-dom';
import ProfileContent from '../ProfileContent/ProfileContent';
import InstrumentContent from '../InstrumentContent/InstrumentContent';

import './UserProfile.css';

const UserProfile = () => {
  return (
    <div>
      <ProfileContent />

      <InstrumentContent />

      <h5> Add New Instrument</h5>
      <Link to="/instrument/new" className="btn-floating right btn-large red">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default UserProfile;
