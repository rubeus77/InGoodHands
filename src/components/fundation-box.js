import React, { Component } from 'react';

class FundationBox extends Component {
    render () {
        console.log(this.props.info);
        let arrThings=[];
        console.log(this.props.thingsType)
        arrThings=this.props.thingsType.map( (elem, ind) => this.props.thingsType[ind].type);
        return (
            <div className="FundationBox">
                <div className="left">
                    <h2>{this.props.info.name}</h2>
                    <p>{this.props.info.about}</p>
                    <div className="divider"></div>
                </div>
                <div className="right">
                    <p>{arrThings.join(", ")}</p>
                    <div className="divider"></div>
                </div>
            </div>
        )
    }
}

export default FundationBox;