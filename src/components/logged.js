import React, { Component } from "react";
import Menu from './menu';
//import Header2 from './header2';
import Contact from'./contact';
import BigForm from "./big-form";

class Logged extends Component{

    render(){
        return(
            <>
            <Menu />
            {/* <Header2/> */}
            <BigForm />
            <Contact />
            </>
        )
    }
}

export default Logged;