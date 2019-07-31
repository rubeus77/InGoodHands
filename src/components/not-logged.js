import React, { Component } from "react";
import PageHeader from './page-header';
import YellowBar from './yellow-bar';
import About from './about';

class NotLogged extends Component{
    render(){
        console.log(this.props.data);
        return(
            <>
                <PageHeader log={this.props.log}/>
                <YellowBar/>
                <About/>
            </>
        )
    }
}

export default NotLogged;