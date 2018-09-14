import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import LoginForm from '../forms/LoginForm';
import {login} from '../../redux/actions/auth';


class LoginPage extends Component {

  submit = (data) => this.props.login(data).then(() => this.props.history.push("/dashboard"));

  render() {
    return (
        <LoginForm submit={this.submit}/>
    )
  }
}

LoginPage.propTypes = {
  login : PropTypes.func.isRequired
}

export default connect(null,{login})(LoginPage);