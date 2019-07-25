import React, {Component} from "react";

class Ornament extends Component{

    render(){
        return(
            <>
                <h2>{this.props.text}</h2>
                <div className="Ornament-img"></div>
            </>
        )
    }
}

export default Ornament;