import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {signup} from '../../redux/actions/user'; 
import SignupForm from '../forms/SignupForm';

class SignupPage extends Component {

  submit = data => 
    this.props.signup(data).then((a)=>{
      this.props.history.push('/login')
      console.log('submit')
    });

  render() {
    return (
        <SignupForm submit={this.submit}/>
    )
  }
}

SignupPage.propTypes = {
  signup:PropTypes.func.isRequired
}


export default connect(null,{signup})(SignupPage);
