import React, { Component } from "react";
import "./App.scss";
import Logged from './components/logged';
import NotLogged from './components/not-logged';
//import { HashRouter, Router, Link, Switch, NavLink } from 'react-router-dom';
//import LogIn from "./components/log-in";
//import LoginForm from "./components/login-form";
//import RegisterForm from "./components/register-form";
import BigForm from './components/big-form';

class App extends Component {
  state = {
    session: null
  }

  componentDidMount() {
    fetch("http://localhost:3001/app").then(res => res.json())
      .then(data => {
        this.setState({
          session: data.session
        });
      })
      .catch(err => alert(err));
  }
  handleLogin = () =>{
    this.setState({
      session: true
    })
  }
  handleLogout = () =>{
    this.setState({
      session: false
    })
  }
  render() {
    if(this.state.session!==null){
      return(
        <div>
          <BigForm />
          {/* <RegisterForm log={this.handleLogout} /> */}
          {/* <LoginForm log={this.handleLogin}/> */}
          {this.state.session?<Logged log={this.handleLogout}/>:<NotLogged log={this.handleLogin}/>}
        </div> 
      )
    }else{
      return null;
    }
  }
}

export default App;
