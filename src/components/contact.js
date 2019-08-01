import React, { Component } from 'react';
import Ornament from './ornament';
import imgFB from '../assets/images/fb.png';
import imgINSTA from '../assets/images/insta.png';

class Contact extends Component {
    state ={
        name:'',
        email:'',
        message:'',
        errors:[]

    }
    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event =>{
        event.preventDefault();
        let errorList=[];
        //walidacja pól
        (this.state.name.length<=0) && errorList.push('Pole "Imię" nie powinno byc puste.');
        (this.state.email.length<=3 && this.state.email.indexOf("@")<=0) && errorList.push('Błędny adres email.');
        (this.state.message.length<=0) && errorList.push('Wiadomość nie powinna być pusta.');
        if(errorList.length!==0) {
            this.setState({
                errors: errorList
              })
        }else{
            //bez wcięć za względu na PRE formatowanie tekstu
alert(`${this.state.name}, dziekujemy za Twoją wiadomość: \n 
${this.state.message} \n 
Odpowiemy na podany przez Ciebie adres e-mail: ${this.state.email}`);
        }
        
    }
    render() {
        
        return (
            <div className="Contact">
                <div className="message">
                    <Ornament text={<h1>Skontaktuj sie z nami</h1>} />
                    <p>Formularz kontaktowy</p>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <div>
                            <input name="name" value={this.state.name} onChange={this.handleChange} placeholder="Imię"/>
                            <input name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
                        </div>
                        <input name="message" value={this.state.message} onChange={this.handleChange} placeholder="Wiadomość"/>
                        <button type="submit">Wyślij</button>
                        {this.state.errors.length>0 && (
                            <ul className="errors-box">
                              {this.state.errors.map(elem=><li key={elem}>{elem}</li>)}
                            </ul>
                            )}
                    </form>
                </div>
                <footer>
                    <p> Copyright 2015 &copy; by Anna Dadej</p>
                    <div className="links">
                        <a href="http://facebook.com">
                            <img src={imgFB} alt="FB"/>
                        </a>
                        <a href="http://instagram.com">
                            <img src={imgINSTA} alt="Insta"/>
                        </a>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Contact;