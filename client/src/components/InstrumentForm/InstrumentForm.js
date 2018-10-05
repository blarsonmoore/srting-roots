//instrument input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import InputField from '../InputField/InputField';
import InstrumentFormFields from '../InstrumentFormFields';

import './instrumentForm.css';

class InstrumentForm extends Component {
  renderFields() {
    return _.map(InstrumentFormFields, ({ label, name }) => {
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
      <div className="container">
        <form onSubmit={this.props.handleSubmit(this.props.onInstrumentSubmit)}>
          {this.renderFields()}

          <Link to="/userProfile" className="red btn-flat white-text">
            Cancel
          </Link>

          <button
            type="submit"
            className="btn waves-effect right blue-grey darken-3 waves"
          >
            Preview
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
}

// function validate(values) {
//   const errors = {};

//   _.each(InstrumentFormFields, ({ name }) => {
//     if (!values[name]) {
//       errors[name] = 'Field is required.';
//     }
//   });
//   return errors;
// }
export default reduxForm({
  // validate,
  form: 'instrumentForm',
  destroyOnUnmount: false
})(InstrumentForm);
