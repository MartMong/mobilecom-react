import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {logout} from '../../redux/actions/auth';



class DashBoardPage extends Component {

  logout = () => {
    this.props.logout()
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h1>DashBoard</h1>
        <button onClick={()=>this.logout()}>Logout</button>
      </div>
    )
  }
}

DashBoardPage.proptypes = {
  logout : PropTypes.func.isRequired
}

export default connect(null,{logout})(DashBoardPage);
