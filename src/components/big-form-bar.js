import React, { Component } from 'react';


class BigFormBar extends Component {
    
    render () {
        return (
            <div className="BigFormBar">
                <div className="info">
                    <h1>Ważne!</h1>
                    {this.props.info}
                </div>
            </div>
        )
    }
}

export default BigFormBar;