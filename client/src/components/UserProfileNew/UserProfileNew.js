import React, { Component } from 'react';
import UserProfileForm from '../UserProfileForm/UserProfileForm';
import FormReview from '../FormReview/FromReview';

import './UserProfileNew.css';

class UserProfileNew extends Component {
  state = { showReview: false };

  renderContent() {
    if (this.state.showReview) {
      return <FormReview />;
    }
    return <UserProfileForm onProfileSubmit={() => this.setState({ showFormReview: true })} />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default UserProfileNew;
