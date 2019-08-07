import React, { Component } from 'react';
import Ornament from './ornament';
import { HashRouter,  Link } from 'react-router-dom';

class LoginForm extends Component {
    state ={
        email: "",
        password: "",
        users: null,
        errors: []
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
            //this.props.log()
            this.props.history.push("/") 
        }else{
            this.setState({
                errors: ["Hasło i email nie pasują do siebie"]
            })
        }
    }
    render () {
        return (
            <HashRouter>
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
            </HashRouter>
        )
    }
}

export default LoginForm;