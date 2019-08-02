import React, { Component } from "react";
import Menu from './menu';
import PageHeader from './page-header';
import YellowBar from './yellow-bar';
import Steps from './steps';
import About from './about';
import Contact from "./contact";

class NotLogged extends Component{
    render(){
        console.log(this.props.data);
        return(
            <>  
                <Menu log={this.props.log} />
                <PageHeader />
                <YellowBar/>
                <Steps/>
                <About/>
                <Contact/>
            </>
        )
    }
}

export default NotLogged;