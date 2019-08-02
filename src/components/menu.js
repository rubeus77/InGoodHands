import React, {Component} from 'react';
import LogIn from './log-in';

class Menu extends Component{
    render(){
        return(
            <nav>
                <LogIn log={this.props.log}/>
            </nav>
        )
    }
}

export default Menu;