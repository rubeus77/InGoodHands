import React, {Component} from 'react';
import LogIn from './log-in';
import { Link } from 'react-scroll'

class Menu extends Component{
    state ={
        menu: null
    }
    componentDidMount(){
        fetch("http://localhost:3001/menu")
        .then( resp => resp.json())
        .then( data => {
            this.setState({
                menu: data
            })
        })
    }
    render(){
        return(
            <nav className="Menu">
                <LogIn log={this.props.log}/>
                {this.state.menu!==null &&(
                    <ul>
                        {this.state.menu.map( (elem, ind) => <li key={ind}><Link to={elem.to}>{elem.name}</Link></li>)}
                    </ul>
                )}
                
            </nav>
        )
    }
}

export default Menu;