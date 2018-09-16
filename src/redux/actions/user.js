import api from '../api';

export const signup = (data) => ()  =>
    api.user.signup(data).then(res=>res);
