 import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { userActions } from './_actions';
import { LoginPage } from './loginpage/LoginPage';
import {HashRouter, Switch, Route, Link } from 'react-router-dom';
import Layout from './layout';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        
                            <div>
                            <LoginPage/>
                            <Layout/>
                            </div>
                    
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 