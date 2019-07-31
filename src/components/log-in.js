import React, {Component} from 'react';

class LogIn extends Component{
    render(){
        return(
            <>
            <button onClick={this.props.log}>Zaloguj</button>
            </>
        )
    }
}

export default LogIn;