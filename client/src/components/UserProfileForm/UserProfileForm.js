//user input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import InputField from '../InputField/InputField';
import formFields from '../formFields';

import './UserProfileForm.css';

class UserProfileForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return <Field key={name} component={InputField} type="text" label={label} name={name} />;
    });
  }

  render() {
    return (
      <div id="userForm">
        <form onSubmit={this.props.handleSubmit(this.props.onProfileSubmit)}>
          {this.renderFields()}

          <Link to="/userProfile" className="red btn-flat white-text">
            Cancel
          </Link>

          <button type="submit" className="btn waves-effect right blue-grey darken-3 waves">
            Preview
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'Field is required.';
    }
  });
  return errors;
}
export default reduxForm({
  validate,
  form: 'userProfileForm',
  destroyOnUnmount: false
})(UserProfileForm);
