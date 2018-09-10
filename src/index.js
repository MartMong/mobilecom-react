import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {createStore,applyMiddleware} from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import "semantic-ui-css/semantic.min.css";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './redux/rootReducer';


const store =createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);


ReactDOM.render(
    <BrowserRouter>
         <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
    
   
    
    , document.getElementById('root'));
registerServiceWorker();