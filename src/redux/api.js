import axios from 'axios';

export default {
    user:{
        signup:user=>
            axios.post('/api/user',{user}).then(res => {
                 console.log(res)
                 return res.data.user}),
        login:credentials=>
            axios.post('/api/auth',{credentials}).then(res=>res.data.user)
    }
}