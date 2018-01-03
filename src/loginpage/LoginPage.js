 import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { hashHistory } from 'react-router';
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk';
import Layout from '../layout';
import {Router, HashRouter, Switch, Route, Link } from 'react-router-dom';


class LoginPage extends Component {
    constructor(props){
        super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
}
 // login(data){
  
 //  console.log(this.state);
 //  this.setState({ submitted: true });
 //        const { username, password } = this.state;
 //        const { dispatch } = this.props;
 //        if (username && password) {
 //            dispatch(userActions.login(username, password));
 //        }
 // };

    handleChange(e){
      this.setState({[e.target.name]:e.target.value});
    };
    handleLogin(e) {
        e.preventDefault();
        console.log("hi");
        const data = this.state;

        //call API to match login credentials
        fetch('http://localhost:8080/api/employees/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then (responsedata => {
            console.log(responsedata)
            this.setState({emp:responsedata});
            console.log(this.state);
            if(responsedata.id=data.id){
                console.log("coming");
                const location = {
               pathname: '/dashboard'
 
               }
            console.log('success');    
            browserHistory.push(location);
            location.href="dashboard";
            }
        })
        .catch(err => err);
    }

   
  render() {
    
    return (
      <div>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Itech</h1>
        </header> 
      </div>
      <div className="login-page col-md-6 col-md-push-3">
    <div className="login-box">
        <div className="logo">
            <a href="javascript:void(0);">HRIMS LOGIN</a>
        </div>
        <div className="card">
            <div className="body">
                <form name="form" onSubmit={this.handleLogin}>
                    <div className="msg">Sign in to your portal</div>
                    <div className="input-group">
                        <span className="input-group-addon">
                            <i className="material-icons">person</i>
                        </span>
                        <div className="form-group">
                            <input type="text" className="form-control" name="id" placeholder="Login ID"
                             onChange = {this.handleChange} required autoFocus/>
                        </div>
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon">
                            <i className="material-icons">lock</i>
                        </span>
                        <div className="form-group">
                            <input type="password" className="form-control" name="password" placeholder="Password"
                             onChange = {this.handleChange} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div align="center">
                        <div className="form-group">
                          <button className="btn btn-info btn-lg  col-md-6 col-xs-6 col-xs-offset-3 col-md-offset-3 waves-effect">SIGN IN</button>
                        </div>
                        </div>
                    </div>
                    <div className="row m-t-15 m-b--20">
                        <div className="col-md-4 col-xs-6">
                          <div align="left"><a href="#">Contact Admin</a></div>
                        </div>
                        <div className="col-md-8 col-xs-6">
                           <div align="right"> <a href="#">Forgot Password?</a></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  
    return {
        state
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 
