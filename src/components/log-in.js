import React, {Component} from 'react';
import { HashRouter, Link } from 'react-router-dom';

class LogIn extends Component{
    render(){
        return(
            <HashRouter>
                <ul className="Log-in">
                    <li><Link to="/login">Zaloguj</Link></li>
                    <li><Link to="/register">Załóż konto</Link></li>
                </ul>
            </HashRouter>
        )
    }
}

export default LogIn;