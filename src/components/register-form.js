import React, { Component } from 'react';
import Ornament from './ornament';
import { HashRouter,  Link } from 'react-router-dom';

class RegisterForm extends Component {
    state ={
        email: "",
        password: "",
        password2: "",
        name: "",
        errors: []
    }
    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let errorList=[];
        (this.state.name.length<=0) && errorList.push('Pole "Imię" nie powinno byc puste.');
        (this.state.email.length<=3 && this.state.email.indexOf("@")<=0) && errorList.push('Błędny adres email.');
        (this.state.password.length<=0) && errorList.push('Musisz podać hasło.');
        (this.state.password!==this.state.password2) && errorList.push('Hasła nie pasują do siebie.');

        if(errorList.length>0){
            this.setState({
                errors: errorList
            })
        }else{
            let userData = {
                name: this.state.name,
                email: this.state.email,
                pass: this.state.password
            }

            fetch("http://localhost:3001/users", {
                method: "POST",
                body: JSON.stringify(userData),
                headers:{
                    'Content-Type':'application/json'
                }
            }).catch( err => alert( err ))
        }   
    }
    
    handleBlur = () => {
        fetch("http://localhost:3001/users")
        .then( resp => resp.json())
        .then( data => {
            let arrEmails=[];
            data.map( elem => arrEmails.push(elem.email));
            if(arrEmails.indexOf(this.state.email) >= 0){
                this.setState({
                    errors: ["Podany email jest już w bazie"],
                    email: ''
                })
            }
        })
    }
    render () {
        return (

            <HashRouter>
            <div className="LoginForm">
                <form className="register-form" onSubmit={this.handleSubmit}>
                    <Ornament text={<h1>Załóż konto</h1>} />
                    <input name="name" value={this.state.name} onChange={this.handleChange} placeholder="Imię"/>
                    <input name="email" value={this.state.email} onChange={this.handleChange} onBlur={this.handleBlur} placeholder="Email"/>
                    <input name="password" value={this.state.password} onChange={this.handleChange} placeholder="Hasło"/>
                    <input name="password2" value={this.state.password2} onChange={this.handleChange} placeholder="Powtórz hasło"/>
                    <div className="bottom-buttons">
                        <button><Link to="/login">Zaloguj się</Link></button>
                        <button type="submit">Załóż konto</button>
                    </div>
                    {this.state.errors.length>0 && (
                            <ul className="errors-box">
                              {this.state.errors.map(elem=><li key={elem}>{elem}</li>)}
                            </ul>
                            )}
                </form>
                
            </div>
        </HashRouter>
        )
    }
}

export default RegisterForm;