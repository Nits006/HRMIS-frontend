import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {store } from './store/store';
import {Provider} from 'react-redux';
import App from './App';
import layout from './layout';
import { LoginPage } from './loginpage/LoginPage';
import {HashRouter, Switch, Route, Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
	<HashRouter>
	 <Route path="/" exact={true} component={LoginPage} />
	</HashRouter>
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
