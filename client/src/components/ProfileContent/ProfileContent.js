import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../../actions';
import './ProfileContent.css';

class ProfileContent extends Component {
  componentDidMount() {
    this.props.fetchProfile();
  }
  render() {
    return <div>Profile</div>;
  }
}

function mapStateToProps({ profile }) {
  return { profile };
}

export default connect(
  mapStateToProps,
  { fetchProfile }
)(ProfileContent);
