import {GET_ALL_PRODUCT} from '../types';

const product = (state={},action) =>{
    switch(action.type){
        case GET_ALL_PRODUCT:{
            return {...state,products:action.products}
        }
        default:
            return state;
    }
}

export default product;
