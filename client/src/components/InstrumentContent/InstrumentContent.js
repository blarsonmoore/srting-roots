import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInstruments } from '../../actions';
import images_1 from '../InstrumentContent/Images/deering-scoop.jpg';
import images_2 from '../InstrumentContent/Images/deering-scoop.jpg';
import images_3 from '../InstrumentContent/Images/deering-scoop.jpg';
import images_4 from '../InstrumentContent/Images/deering-scoop.jpg';
import './InstrumentContent.css';

class InstrumentContent extends Component {
  componentDidMount() {
    this.props.fetchInstruments();
  }

  renderInstruments() {
    return this.props.instrument.map(instrument => {
      return (
        <div id="instProfile" className="row" key={instrument._id}>
          <h3>Your Collection</h3>
          <div className="col s12 m3">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img id="card_image" className="activator" src={images_1} />
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
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img id="card_image" className="activator" src={images_2} />
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
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img id="card_image" className="activator" src={images_3} />
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

          <div className="col s12 m3">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img id="card_image" className="activator" src={images_4} />
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
