import api from '../api';

export const signup = (data) => dispatch  =>
    api.user.signup(data).then(()=>{
        // localStorage.mobileJWT = user.token;
        console.log(1111)
    });