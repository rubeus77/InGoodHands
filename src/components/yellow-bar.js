import React, {Component} from 'react';
import InfoBox from './info-box';

class YellowBar extends Component{
    state = {
        data: null
    }

    // Zapytać czy lepiej fetchować czy przesyłac w propsach
    componentDidMount() {
        fetch("http://localhost:3001/app")
        .then(res => res.json())
        .then(data => {
            console.log ("z yelloBar steState: "+ {...data});
            this.setState({
              data: {...data} 
            });
            console.log("this.state.data: "+this.state.data)
          })
        .catch(err => alert(err));
    }
    render() {
        return (
            <div >
                {/*this.state.data!=null && this.state.data.map( elem => <InfoBox key={elem} info={elem}/>)*/}
            </div>
        )
    }
}

export default YellowBar;