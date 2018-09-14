import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment,Icon } from 'semantic-ui-react';
import Validator from 'validator';
import PropTypes from 'prop-types';


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

    
    onSubmit = () =>  {
      const errors = this.validate(this.state.data);
      this.setState({errors});
      if( Object.keys(errors).length === 0){
          this.setState({loading:true});
          this.props
          .submit(this.state.data)
          .catch(err => this.setState({errors:err.response.data.errors,loading:false}));
      }
  }



  render() {
    console.log(this.props)
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
            <Icon name='user circle' /> Log-in to your account
            </Header>
            <Form size='large' onSubmit={this.onSubmit}>
              <Segment stacked>
                <Form.Input 
                    fluid
                    icon='user' 
                    iconPosition='left' 
                    type='email'
                    placeholder='E-mail address' 
                    value={data.email}
                    // error={!!errors.email}
                    name='email'
                    onChange={this.onChange}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  name='password'
                  type='password'
                  onChange={this.onChange}
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

LoginForm.propTypes = {
  submit : PropTypes.func.isRequired
}

export default LoginForm;