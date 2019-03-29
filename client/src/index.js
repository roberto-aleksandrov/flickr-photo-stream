import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import configureStore from './store/configureStore';
import { flickrApi }from './api-services';
import { flickrApiConfig } from './api-services/configurations';
import * as serviceWorker from './serviceWorker';

import App from './App';

import 'bootstrap/dist/css/bootstrap.css';

const apis = {
   flickrApi: flickrApi(flickrApiConfig)
}

ReactDOM.render(
   <Provider store={configureStore(apis)}> 
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider> 
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
