import React, { Component } from 'react';
import Ornament from './ornament';
import { HashRouter as Router,  Link } from 'react-router-dom';
import Menu from './menu';

class LoginForm extends Component {
    state ={
        email: "",
        password: "",
        users: null,
        errors: [],
        sessionData: {},
        userId: 0
    }

    componentDidMount () {
        fetch("http://localhost:3001/users")
        .then( resp => resp.json())
        .then( data => {
            this.setState({
                users: data
            })
        })
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.email==="" || this.state.password===""){
            this.setState({
                errors: ["Pola Email i Hasło nie mogą byc puste"]
            })
        }
        let arrEmails=[];
        let tempPass="";
        this.state.users.map( elem => arrEmails.push(elem.email));
        if(arrEmails.indexOf(this.state.email)>=0){
            tempPass=this.state.users[arrEmails.indexOf(this.state.email)].pass;
        }
        if(tempPass===this.state.password){

            fetch("http://localhost:3001/app").then(res => res.json())
            .then(data => {
                this.setState({
                sessionData: data
                },()=>{
                    let sessionTemp = this.state.sessionData;
                    sessionTemp.session = true;
                    sessionTemp.whoIsLogged = this.state.users[arrEmails.indexOf(this.state.email)].id;
                        console.log(sessionTemp)
                        console.log(this.state.sessionData)
                    fetch("http://localhost:3001/app", {
                        method: "PUT",
                        body: JSON.stringify(sessionTemp),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).catch( err => alert( err ));
                    this.props.history.push("/give-stuff") 
                });
            })
            .catch(err => alert(err));
            
        }else{
            this.setState({
                errors: ["Hasło i email nie pasują do siebie"]
            })
        }
    }
    render () {
        return (
            <Router>
                <Menu />
                {this.props.info && <div>{this.props.info}</div>}
                <div className="LoginForm">
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <Ornament text={<h1>Zaloguj się</h1>} />
                        <input name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
                        <input name="password" value={this.state.password} onChange={this.handleChange} placeholder="Hasło"/>
                        <button className="password-remember">Przypomnij hasło</button>
                        <div className="bottom-buttons">
                            <button><Link to="/register">Załóż konto</Link></button>
                            <button type="submit">Zaloguj się</button>
                        </div>
                        {this.state.errors.length!==0 && <p style={{color: "red"}}>{this.state.errors}</p>}
                    </form>
                    
                </div>
            </Router>
        )
    }
}

export default LoginForm;