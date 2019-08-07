import React, { Component } from "react";
import "./App.scss";
import Logged from './components/logged';
import NotLogged from './components/not-logged';
import { HashRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
//import LogIn from "./components/log-in";
import LoginForm from "./components/login-form";
import RegisterForm from "./components/register-form";
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
        <Router>
          
          
           {/*this.state.session?<Logged log={this.handleLogout}/>:<NotLogged log={this.handleLogin}/>*/}
          <Switch>
            <Route exact path="/" component={NotLogged} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/give-stuff" component={BigForm} />
          </Switch>
        </Router> 
      )
    }else{
      return null;
    }
  }
}

export default App;
