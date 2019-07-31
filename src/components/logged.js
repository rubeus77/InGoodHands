import React, { Component } from "react";

class Logged extends Component{
    render(){
        return(
            <>
            Zalogowany
            <button onClick={this.props.log}>Wyloguj</button>
            </>
        )
    }
}

export default Logged;