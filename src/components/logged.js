import React, { Component } from "react";
import Menu from './menu';
import Contact from'./contact';

class Logged extends Component{
    render(){
        return(
            <>
            {/* <Menu log={this.props.log}/> */}
            Zalogowany
            <button onClick={this.props.log}>Wyloguj</button>
            <Contact />
            </>
        )
    }
}

export default Logged;