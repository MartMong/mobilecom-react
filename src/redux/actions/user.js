import api from '../api';

export const signup = (data) => ()  =>
    api.user.signup(data).then(res=>res);

export const getUserDetail = () => () =>
    api.user.getUserDetail().then(res=>console.log(res))
