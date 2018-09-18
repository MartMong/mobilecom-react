import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const UserRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated ? (
                <Component {...props} />
            ) : (
                    <Redirect to="/" />
                )}
    />
);

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token
    }
}

UserRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}
export default withRouter(connect(mapStateToProps)(UserRoute));