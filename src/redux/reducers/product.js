import {GET_ALL_PRODUCT} from '../types';

const product = (state={},action) =>{
    switch(action.type){
        case GET_ALL_PRODUCT:{
            console.log(state,'<-------------------')
            return Object.assign(state,action.products)
        }
        default:
            return state;
    }
}

export default product;

// Object.assign({c: 4, d: 5}, object1);