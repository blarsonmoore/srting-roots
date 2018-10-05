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

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <div id="mainContainer" className="container">
          <Header />
          <Body />
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
