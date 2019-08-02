import React, { Component } from 'react';
import Ornament from './ornament';

class Fundations extends Component {
    state = {
        list:[],
        fetchData:null,
        pageNumber:0,
        organizationType:null
    }
    componentDidMount () {
        fetch("http://localhost:3001/organizationsType").then(res => res.json())
        .then(data => {
          this.setState({
            organizationType: data
          },() => console.log(this.state.organizationType));
        })
        .catch(err => alert(err));
    }
    
    handleButtons = (param) => {
        let link="http://localhost:3001/"+this.state.organizationType[param].linkTo;
        fetch(link)
            .then( res => res.json() )
            .then( data => {
                this.setState({
                    fetchData: data
                }, () => console.log(this.state.fetchData));
            })
            .catch( err => alert(err) )
    }
    render () {
        return (
            <div className="Fundations">
                <div className="top-box">
                    <Ornament text={<h1>Komu pomagamy?</h1>} />
                    <div className="buttons">
                        {this.state.organizationType!==null?this.state.organizationType.map( (elem, ind) => <button key={ind} onClick={ () => this.handleButtons(ind)} ><p>{elem.type}</p></button> ):null}
                    </div>
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                </div>
                <div className="bottom-box">
                    <ul>

                    </ul>
                    {this.state.pageNumber!==0?"przyciski":null}
                </div>
            </div>
        )
    }
}

export default Fundations;