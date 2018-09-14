import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const GuestRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            !isAuthenticated ? <Component {...props} /> : <Redirect to="/dashboard" />}
    />
);


GuestRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.user.token
    }
}
export default withRouter(connect(mapStateToProps)(GuestRoute));