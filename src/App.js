import React, { Component } from "react";
import "./App.scss";
import Logged from './components/logged';
import NotLogged from './components/not-logged';

class App extends Component {
  state = {
    data: null,
    session: false
  }

  componentDidMount() {
    fetch("http://localhost:3001/app").then(res => res.json())
      .then(data => {
        this.setState({
          data,
          session: data.session
        });
      })
      .catch(err => alert(err));
  }
  
  render() {
    return (
      <React.Fragment>
        {this.state.isSession?<Logged/>:<NotLogged data={this.state.data}/>}
      </React.Fragment>
    );
  }
}

export default App;
