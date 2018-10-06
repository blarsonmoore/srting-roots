import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Body from './Body/Body';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import Footer from './Footer/Footer';
import UserProfile from './UserProfile/UserProfile';
import InstrumentNew from './InstrumentNew/InstrumentNew';
import UserProfileNew from './UserProfileNew/UserProfileNew';

import Toolbar from '../components/Toolbar/Toolbar';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Backdrop from '../components/Backdrop/Backdrop';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <BrowserRouter>
        <div id="mainContainer" className="container">
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <Route exact path="/" component={Landing} />
          <Route exact path="/userprofile" component={UserProfile} />
          <Route exact path="/instrument/new" component={InstrumentNew} />
          <Route exact path="/userprofile/new" component={UserProfileNew} />
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
