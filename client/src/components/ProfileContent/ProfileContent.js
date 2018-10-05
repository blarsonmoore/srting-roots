import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../../actions';
import './ProfileContent.css';
import images from '../Body/Images/oZr3irkSDKpSSjmFkpgP6K.jpg';

class ProfileContent extends Component {
  componentDidMount() {
    this.props.fetchProfile();
  }

  renderProfile() {
    return this.props.profile.map(profile => {
      return (
        <div id="profile" className="row" key={profile._id}>
          <h3>{profile.userName}</h3>
          <div className="col s12 m4">
            <div className="userImage">
              <img id="profileImage" src={images} alt="guitar" />
            </div>
          </div>
          <div className="col s12 m8">
            <div className="bioContent">
              <p>{profile.userBio}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderProfile()}</div>;
  }
}

function mapStateToProps({ profile }) {
  return { profile };
}

export default connect(
  mapStateToProps,
  { fetchProfile }
)(ProfileContent);
