import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Body from './Body/Body';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import Footer from './Footer/Footer';
import UserProfile from './UserProfile/UserProfile';
import InstrumentNew from './AddInstrument/AddInstrument';
import UserProfileNew from './UserProfileNew/UserProfileNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Body />
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/userProfile" component={UserProfile} />
          <Route exact path="/instrument/new" component={InstrumentNew} />
          <Route exact path="/userprofile/new" component={UserProfileNew} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
