import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Body from './Body/Body';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import Footer from './Footer/Footer';
import UserProfile from './UserProfile/UserProfile';
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Body />
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/userProfile" component={UserProfile} />
            <Route exact path="/surveys/new" component={SurveyNew} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
