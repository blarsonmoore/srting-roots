import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from '../formFields';
import { Link, withRouter } from 'react-router-dom';
import * as actions from '../../actions/';

const UserProfileReview = ({ onCancel, formValues, SubmitProfile, history }) => {
  const reviewProfile = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  return (
    <div>
      <h5>Please Review Your Profile</h5>
      {reviewProfile}
      <button className="red btn-flat white-text" onClick={onCancel}>
        Edit
        <i className="material-icons right">edit</i>
      </button>
      <Link to="/userprofile">
        <button onClick={() => SubmitProfile(formValues, history)} className="green btn-flat right white-text">
          Save
          <i className="material-icons right">save</i>
        </button>
      </Link>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.userProfileForm.values };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(UserProfileReview));
