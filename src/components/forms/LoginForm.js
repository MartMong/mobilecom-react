import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import Validator from 'validator';


class LoginForm extends Component {


    state = {
        data:{
            email:'',
            password:''    
        },
        loading:false,
        errors:{}
    }

    onChange = e => 
    this.setState({
        data:{...this.state.data,[e.target.name]:e.target.value}
    });

    validate = (data) => {
        const errors = {};
        if(!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if (!data.password) errors.password = "can't be blank";
        return errors;
    }




  render() {
    const {data,errors} = this.state;
    return (
        <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src='/logo.png' /> Log-in to your account
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input 
                    fluid
                    icon='user' 
                    iconPosition='left' 
                    placeholder='E-mail address' 
                    value={data.email}
                    error={!!errors.email}
                    onChange={this.onChange}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />
    
                <Button color='teal' fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href='#'>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default LoginForm;