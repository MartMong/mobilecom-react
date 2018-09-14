import {USER_LOGGED_IN,USER_LOGGED_OUT} from '../types';
import api from '../api';

export const userLoggedIn = (user) => {
    console.log(user)
    return({
    type:USER_LOGGED_IN,
    user
})};

export const userLoggedOut = () => ({
    type:USER_LOGGED_OUT
});



export const login = credentials => dispatch => api.user.login(credentials)
    .then(user=>{
        localStorage.mobilecomJWT = user.token;
        dispatch(userLoggedIn(user));
    })