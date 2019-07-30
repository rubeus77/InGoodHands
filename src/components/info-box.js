import React, {Component} from 'react';

class InfoBox extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.info}</h1>

            </div>
        )
    }
}

export default InfoBox;