import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import UserProfileForm from '../UserProfileForm/UserProfileForm';

import './UserProfileNew.css';

class UserProfileNew extends Component {
  render() {
    return (
      <div>
        <UserProfileForm />
      </div>
    );
  }
}

export default reduxForm({
  form: 'UserProfileForm'
})(UserProfileNew);
