import React, { Component } from "react";
import Menu from './menu';
import PageHeader from './page-header';
import YellowBar from './yellow-bar';
import Steps from './steps';
import About from './about';
import Functions from './fundations-list';
import Contact from "./contact";


class NotLogged extends Component{
    state = {
        sessionData:{}
    }
    componentDidMount() {
        fetch("http://localhost:3001/app").then(res => res.json())
          .then(data => {
            this.setState({
              sessionData: data
            });
          })
          .catch(err => alert(err));
      }
    render(){
        return(
            <>  
                <Menu call={true} />
                <PageHeader log={this.state.sessionData.session}/>
                <YellowBar/>
                <Steps/>
                <About/>
                <Functions />
                <Contact/>
            </>
        )
    }
}

export default NotLogged;