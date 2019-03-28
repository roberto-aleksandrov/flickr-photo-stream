import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { flickrApi }from './api-services';
import { flickrApiConfig } from './api-services/configurations';
import 'bootstrap/dist/css/bootstrap.css';

const apis = {
   flickrApi: flickrApi(flickrApiConfig)
}

ReactDOM.render(
<Provider store={configureStore(apis)}> 
   <App />
</Provider> 
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
