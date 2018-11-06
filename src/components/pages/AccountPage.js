import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react';
import axios from 'axios';

import setAuthorizationToken from '../../utils/setAuthorizationToken';
import { serialize } from 'uri-js';
// import {connect} from 'react-redux';
// import {getUserDetail} from '../../redux/actions';


class AccountPage extends Component {

    state = {
        data : {}
    }

    componentDidMount(){
        setAuthorizationToken(localStorage.mobilecomJWT)
        axios.get('/api/user').then(res =>  this.setState({data:res.data.user}))

    }


    render() {

        const {name,email} = this.state.data
        return (

            <Segment.Group>
                <Segment>Account</Segment>
                <Segment.Group>
                    <Segment>Name  :  {name}</Segment>
                    <Segment>Email:  {email}</Segment>
                    <Segment>Birthdate</Segment>
                </Segment.Group>
            </Segment.Group>

        )
    }
}

export default AccountPage;