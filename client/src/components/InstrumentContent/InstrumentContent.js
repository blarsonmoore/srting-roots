import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInstruments } from '../../actions';
import images from '../Body/Images/oZr3irkSDKpSSjmFkpgP6K.jpg';
import './InstrumentContent.css';

class InstrumentContent extends Component {
  componentDidMount() {
    this.props.fetchInstruments();
  }

  renderInstruments() {
    return this.props.instrument.map(instrument => {
      return (
        <div className="row" key={instrument._id}>
          <h3>Your Collection</h3>
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={images} />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  {instrument.model}
                  <i className="material-icons right">more_vert</i>
                </span>
                <p>
                  <a href="#">See More</a>
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Card Title
                  <i className="material-icons right">close</i>
                </span>
                <p>
                  Here is some more information about this product that is only
                  revealed once clicked on.
                </p>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={images} />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  {instrument.model}
                  <i className="material-icons right">more_vert</i>
                </span>
                <p>
                  <a href="#">See More</a>
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Card Title
                  <i className="material-icons right">close</i>
                </span>
                <p>
                  Here is some more information about this product that is only
                  revealed once clicked on.
                </p>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={images} />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  {instrument.model}
                  <i className="material-icons right">more_vert</i>
                </span>
                <p>
                  <a href="#">See More</a>
                </p>
              </div>
             
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
