import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import InstrumentFormFields from '../InstrumentFormFields';
import { Link, withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const InstrumentReview = ({ onCancel, formValues, SubmitInstrument, history }) => {
  const instrumentReview = _.map(InstrumentFormFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  return (
    <div>
      <h5>Please Review Instrument Before You Submit</h5>
      {instrumentReview}
      <button className="red btn-flat white-text" onClick={onCancel}>
        Edit
        <i className="material-icons right">edit</i>
      </button>
      <Link to="/userprofile">
        <button onClick={() => SubmitInstrument(formValues, history)} className="green btn-flat right white-text">
          Save
          <i className="material-icons right">save</i>
        </button>
      </Link>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.instrumentForm.values };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(InstrumentReview));
