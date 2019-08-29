import React, {Component} from 'react';
import LogIn from './log-in';
import { Link } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

class Menu extends Component{
    state ={
        menu: null,
        call: false,
        sessionData:{}
    }
    componentDidMount(){
        fetch("http://localhost:3001/menu")
        .then( resp => resp.json())
        .then( data => {
            this.setState({
                menu: data
            })
        });

        if(this.props.call) {
            this.setState({
                call: true
            })
        }
        
        fetch("http://localhost:3001/app").then(res => res.json())
        .then(data => {
        this.setState({
            sessionData: data
        });
        })
        .catch(err => alert(err));
          
    }
    render(){
        if(this.state.call){
            return(
                <nav className="Menu">
                    <LogIn log={this.state.sessionData.session}/>
                    {this.state.menu!==null &&(
                        <ul>
                            {this.state.menu.map( (elem, ind) => <li key={ind}><Link to={elem.to}>{elem.name}</Link></li>)}
                        </ul>
                    )}
                </nav>
            )
        }else{
            return(
                <nav className="Menu">
                    <LogIn log={this.state.sessionData.session}/>
                    {this.state.menu!==null &&(
                        <ul>
                            {this.state.menu.map( (elem, ind) => <li key={ind}><LinkRouter to={elem.href}>{elem.name}</LinkRouter></li>)}
                        </ul>
                    )}
                </nav>
            )
        }
        
    }
}

export default Menu;