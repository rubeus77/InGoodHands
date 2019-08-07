import React, {Component} from 'react';
import InfoBox from './info-box';

class YellowBar extends Component{
    state = {
        helpInNumbers:[],
        helpNames:[]
    }

    // Zapytać czy lepiej fetchować czy przesyłac w propsach
    componentDidMount() {
        fetch("http://localhost:3001/app")
        .then(res => res.json())
        .then(data => {
            this.setState({
              helpInNumbers: data.helpInNumbers,
              helpNames: data.helpNames
            });
          })
        .catch(err => alert(err));
    }
    render() {
        return (
            <div className="YellowBar">
                {this.state.helpInNumbers.map( (elem, ind) => <InfoBox key={ind} helpInNumbers={elem} helpNames={this.state.helpNames[ind]} />)}
            </div>
        )
    }
}

export default YellowBar;