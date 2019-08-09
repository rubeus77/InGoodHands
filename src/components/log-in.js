import React, {Component} from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

class LogIn extends Component{
    render(){
        return(
            <Router>
                <ul className="Log-in">
                    <li><Link to="/login">Zaloguj</Link></li>
                    <li><Link to="/register">Załóż konto</Link></li>
                </ul>
            </Router>
        )
    }
}

export default LogIn;