import axios from 'axios';

export default {
    user:{
        signup:user=>
            axios.post('/api/user',{user}).then(res => res.data.user),
        login:credentials=>
            axios.post('/api/auth',{credentials}).then(res=>res.data.user),
        getUserDetail: () =>
            axios.get('/api/user').then(res=>res.data)
     },
    product:{
        getAllProduct : () => 
            axios.get('/api/products').then(res => res.data)
    }
}