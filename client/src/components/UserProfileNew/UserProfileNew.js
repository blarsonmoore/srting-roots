import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import UserProfileForm from '../UserProfileForm/UserProfileForm';
import UserProfileReview from '../UserProfileReview/UserProfileReview';

import './UserProfileNew.css';

class UserProfileNew extends Component {
  state = { showReview: false };

  renderContent() {
    if (this.state.showReview) {
      return <UserProfileReview onCancel={() => this.setState({ showReview: false })} />;
    }
    return <UserProfileForm onProfileSubmit={() => this.setState({ showReview: true })} />;
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: 'UserProfileForm'
})(UserProfileNew);
