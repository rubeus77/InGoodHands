import React, { Component } from "react";
import Menu from './menu';
import PageHeader from './page-header';
import YellowBar from './yellow-bar';
import Steps from './steps';
import About from './about';
import Functions from './fundations-list';
import Contact from "./contact";

class NotLogged extends Component{
    render(){
        return(
            <>  
                <Menu call={true}/>
                <PageHeader />
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