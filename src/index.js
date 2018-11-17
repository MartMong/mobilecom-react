import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {createStore,applyMiddleware} from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import decode from 'jwt-decode';

import "semantic-ui-css/semantic.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './redux/rootReducer';
import {userLoggedIn} from './redux/actions/auth';
import { Responsive } from 'semantic-ui-react';



const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

if(localStorage.mobilecomJWT){
    const payload = decode(localStorage.mobilecomJWT);
    console.log(payload.email)
    const user = {
        token:localStorage.mobilecomJWT,
        email:payload.email
    };
    store.dispatch(userLoggedIn(user));
    console.log('in index')
}


ReactDOM.render(
    <BrowserRouter>
         <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
    
   
    
    , document.getElementById('root'));
registerServiceWorker();
