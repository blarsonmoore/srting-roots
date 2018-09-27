import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="page-footer transparent">
      <div className="container">
        <div className="row">
          <div className="col s12 l12">
            <h5 className="white-text center align">String Roots</h5>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l12">
            <ul className="white-text center align">
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l12">
            <h6 className="white-text center align">© 2018 Copyright String Roots</h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
