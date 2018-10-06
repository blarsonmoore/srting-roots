import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login</a>
          </li>
        );
      default:
        return (
          <ul>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
            <li>
              <a href="/userprofile">My Profile</a>
            </li>
          </ul>
        );
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper black">
          <Link to={this.props.auth ? '/userprofile' : '/'} className="brand-logo">
            SR
          </Link>
          <a href="sidenav" data-target="mobile-demo" class="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">{this.renderContent()}</ul>
          {/* <ul class="sidenav" id="mobile-demo">
            {this.renderContent()}
            
          </ul> */}
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
