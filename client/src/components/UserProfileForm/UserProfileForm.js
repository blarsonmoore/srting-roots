//user input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import InputField from '../InputField/InputField';
import { Link, withRouter } from 'react-router-dom';
import * as actions from '../../actions/';
import { connect } from 'react-redux';

import './UserProfileForm.css';

const FIELDS = [
  { label: 'User Name', name: 'userName' },
  { label: 'Image', name: 'profilePic' },
  { label: 'About', name: 'bio' }
];




class UserProfileForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={InputField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
          <form  onSubmit={() => actions.SubmitProfile()}>
      
          {this.renderFields()}

          <Link to="/userProfile" className="red btn-flat white-text">
            Cancel
          </Link>

          <button
            type="submit" className="btn waves-effect right blue-grey darken-3 waves"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'Field is required.';
    }
  });

  return errors;
}
export default reduxForm({
  validate,
  form: 'UserProfileForm'
})(UserProfileForm);
