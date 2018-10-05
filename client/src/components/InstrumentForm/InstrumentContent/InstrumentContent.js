import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInstruments } from '../../actions';
import './instrumentContent.css';
import images from '../Body/Images/oZr3irkSDKpSSjmFkpgP6K.jpg';

class InstrumentContent extends Component {
  componentDidMount() {
    this.props.fetchInstruments();
  }

  renderInstruments() {
    return this.props.instrument.map(instrument => {
      return (
        <div id="instrument" className="row" key={instrument._id}>
          <h3>{instrument.model}</h3>
          <div className="col s12 m4">
            <div className="userImage">
              <img id="instrumentImage" src={images} alt="guitar" />
            </div>
          </div>
          <div className="col s12 m8">
            <div className="bioContent">
              <p>{instrument.builder}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderInstruments()}</div>;
  }
}

function mapStateToProps({ instrument }) {
  return { instrument };
}

export default connect(
  mapStateToProps,
  { fetchInstruments }
)(InstrumentContent);
