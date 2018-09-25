import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
           SR
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a>Sass</a>
            </li>
            <li>
              <a>Components</a>
            </li>
            <li>
              <a>Login With Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
