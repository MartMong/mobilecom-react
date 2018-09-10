import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import LoginForm from './components/forms/LoginForm';

class App extends Component {
  render() {
    return (
      <Route path='/login' exact component={LoginForm} />
    );
  }
}

export default App;
