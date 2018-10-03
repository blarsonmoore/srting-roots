import React from 'react';
import { connect } from 'react-redux';
import formFields from '../formFields';
import _ from 'lodash';
import * as actions from '../../actions/';

const UserProfileReview = ({ onCancel, formValues, SubmitProfile }) => {
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
      <button onClick={() => SubmitProfile(formValues)} className="green btn-flat right white-text">
        Save
        <i className="material-icons right">save</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.userProfileForm.values };
}

export default connect(
  mapStateToProps,
  actions
)(UserProfileReview);
