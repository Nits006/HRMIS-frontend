import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {store } from './store/store';
import {Provider} from 'react-redux';
import App from './App';
import Layout from './layout';
import { LoginPage } from './loginpage/LoginPage';
import {HashRouter, Switch, Route, Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';


const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
    <Provider store={store}>
	<HashRouter history={history}>
	<div>
	 <Route path="/dashboard" exact={true} component={Layout}/>
	 <Route path="/" exact={true}component={LoginPage}/>
	 </div>
	</HashRouter>
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
