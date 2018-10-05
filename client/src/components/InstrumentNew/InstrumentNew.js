import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import InstrumentForm from '../InstrumentForm/InstrumentForm';
import InstrumentReview from '../InstrumentReview/InstrumentReview';

import './InstrumentNew.css';

class InstrumenteNew extends Component {
  state = { showReview: false };

  renderContent() {
    if (this.state.showReview) {
      return <InstrumentReview onCancel={() => this.setState({ showReview: false })} />;
    }
    return <InstrumentForm onInstrumentSubmit={() => this.setState({ showReview: true })} />;
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: 'instrumentForm'
})(InstrumenteNew);
