import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div>
          <h1>Home Page</h1>
          <div><Link to="/login">Login</Link> or <Link to='/signup'>Sign UP</Link></div>
      </div>
    )
  }
}

export default HomePage;