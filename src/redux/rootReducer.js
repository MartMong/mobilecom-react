import { combineReducers } from 'redux';

import user from './reducers/user';
import product from './reducers/product';

export default combineReducers({
    user,
    product
});