import React, { Component } from 'react';
import { Route,withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import HomePage from './components/pages/HomePage';
import DashBoardPage from './components/pages/DashBoardPage';

import Navbar from './components/navigation/NavbarTop';

import UserRoute from './routes/UserRoute';
import GuestRoute from './routes/GuestRoute';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Route path='/' exact component={HomePage}/>
        <GuestRoute path='/login' exact component={LoginPage} />
        <GuestRoute path='/signup' exact component={SignupPage} />
        <UserRoute path='/dashboard' exact component={DashBoardPage}/>
      </div>

    );
  }
}

App.propTypes = {
  isAuthenticated : PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated : !!state.user.email
  }
}

export default withRouter(connect(mapStateToProps)(App));
