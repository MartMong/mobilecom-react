import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Icon } from 'semantic-ui-react';
import Validator from 'validator';
import PropTypes from 'prop-types';
import { DateInput, TimeInput } from 'semantic-ui-calendar-react';

class SignupForm extends Component {

    state = {
        data: {
            name: '',
            email: '',
            date: '',
            password: '',
            confirmedPassword: ''
        },
        loading: false,
        errors: {}
    }

    onChange = e =>
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });

    onChangeDate = (e,date) => 
        this.setState({
            data : {...this.state.data, date}

        })

    validate = (data) => {
        const errors = {};

        if(!data.name) errors.name = "Please Fill Name"

        if(!data.date) errors.date = "Please Fill Date"

        if(!data.date) errors.email = "Please Fill Email"
        else if (!Validator.isEmail(data.email)) errors.email = "Invalid email";

        if (!data.password) errors.password = "Can't be blank";
        
        if(!data.confirmedPassword) errors.confirmedPassword = "Please Confirm Password"
        else if (data.password !== data.confirmedPassword ) errors.confirmedPassword = "Password is not match";
        return errors;
    }

    onSubmit = () => {
        console.log('on SUbmit')
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true });
            this.props
                .submit(this.state.data)
                .catch(err => this.setState({ errors: err.response.data.errors, loading: false }));
        }
    }

    render() {
        const { data, errors ,loading} = this.state;
        console.log(errors)
        
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
                            <Icon name='user circle' /> Sign Up your new account
                        </Header>
                        <Form size='large' error loading={loading}>
                            <Segment stacked>
                                <Form.Input
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='Name'
                                    name='name'
                                    value={data.name}
                                    onChange={this.onChange}
                                    error={!!errors.name}
                                />
                                <Form.Input
                                    fluid
                                    icon='address book'
                                    iconPosition='left'
                                    placeholder='E-mail address'
                                    name='email'
                                    error={!!errors.email}
                                    value={data.email}
                                    onChange={this.onChange}
                                />

                                <DateInput
                                    name="date"
                                    placeholder="Birthdate"
                                    popupPosition="bottom right"
                                    value={data.date}
                                    iconPosition="left"
                                    onChange={(e,date) => this.onChangeDate(e,date.value)}
                                    error = {!!errors.date}
                                />

                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    name='password'
                                    value={data.password}
                                    onChange={this.onChange}
                                    error={!!errors.password}
                                />

                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Confirm Password'
                                    type='password'
                                    name='confirmedPassword'
                                    error={!!errors.confirmedPassword}
                                    value={data.confirmedPassword}
                                    onChange={this.onChange}               
                                />

                                {errors.confirmedPassword && <Message
                                    size='small'
                                    error
                                    header={errors.confirmedPassword}
                                    // content='Password must be the same'
                                />}

                                <Button
                                    color='teal'
                                    fluid size='large'
                                    onClick={this.onSubmit}
                                >
                                    Sign Up
                                </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

SignupForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default SignupForm;
