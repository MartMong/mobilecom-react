import axios from 'axios';

export default {
    user:{
        signup:user=>
             axios.post('/api/user',{user}).then(res => res.user)
        
        
            
    }
}