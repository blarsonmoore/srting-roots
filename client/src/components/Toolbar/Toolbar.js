import React, { Component } from 'react';
// import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Toolbar.css';

class Toolbar extends Component {
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
      <div>
        <header className="toolbar">
          <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
              {/* <DrawerToggleButton click={props.drawerClickHandler} /> */}
            </div>
            <div className="toolbar__logo">
              <Link to={this.props.auth ? '/userprofile' : '/'}>SR</Link>
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
              <ul> {this.renderContent()}</ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Toolbar);
