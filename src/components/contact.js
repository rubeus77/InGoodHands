import React, { Component } from 'react';
import Ornament from './ornament';

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <div className="message">
                    <Ornament text={<h1>Skontaktuj sie z nami</h1>} />
                    <div className="inputs">
                        <div>
                            <input name="name"/>
                            <input name="email"/>
                        </div>
                        <input name="message"/>
                    </div>
                </div>
                <footer>
                    <p> Copyright 2015 (r) by Anna Dadej</p>
                    <div className="links">
                        <a href="http://facebook.com">
                            <img src="./src/assets/images/fb.png" alt="FB"/>
                        </a>
                        <a href="http://instagram.com">
                            <img src="./src/assets/images/insta.png" alt="Insta"/>
                        </a>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Contact;