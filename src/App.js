import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import LoginForm from './components/forms/LoginForm';
import SignupPage from './components/pages/SignupPage';
import HomePage from './components/pages/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' exact component={HomePage}/>
        <Route path='/login' exact component={LoginForm} />
        <Route path='/signup' exact component={SignupPage} />
      </div>

    );
  }
}

export default App;
