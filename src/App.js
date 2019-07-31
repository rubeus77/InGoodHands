import React, { Component } from "react";
import "./App.scss";
import Logged from './components/logged';
import NotLogged from './components/not-logged';

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
        console.log("po fetch: "+this.state.session)
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
    console.log("zaraz za render: "+this.state.session)
    if(this.state.session!==null){
      return(
        this.state.session?<Logged log={this.handleLogout}/>:<NotLogged log={this.handleLogin}/>
      )
    }else{
      return null;
    }
  }
}

export default App;
