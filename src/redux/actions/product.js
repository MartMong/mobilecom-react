import api from '../api';
import {GET_ALL_PRODUCT} from '../types';


export const addAllProduct = (res) => {
    console.log(res)
    return ({
        type:GET_ALL_PRODUCT,
        products:res
    })
}

export const getAllProduct = () => dispatch => api.product.getAllProduct()
    .then(res => dispatch(addAllProduct(res.products)))
