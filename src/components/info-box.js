import React, {Component} from 'react';

class InfoBox extends Component{
    render(){
        return(
            <div className="Info-box">
                <h1>{this.props.helpInNumbers}</h1>
                <h3>{this.props.helpNames}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        )
    }
}

export default InfoBox;