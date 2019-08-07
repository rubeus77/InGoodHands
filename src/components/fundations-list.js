import React, { Component } from 'react';
import Ornament from './ornament';
import FundationBox from './fundation-box';

class Fundations extends Component {
    state = {
        list: [],
        fetchData: null,
        pageNumber: [],
        organizationType: null,
        arrWithThreeOrganizations: [],
        thingsType:[]
    }
    componentDidMount () {
        fetch("http://localhost:3001/organizationsType").then(res => res.json())
        .then(data => {
          this.setState({
            organizationType: data
          },() => {
              this.handleButtons(0);
              //this.handlePages(0);
          });
        })
        .catch(err => alert(err));

        fetch("http://localhost:3001/thingsType").then(res => res.json())
        .then(data => {
          this.setState({
            thingsType: data
          });
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
                }, () => {
                    let count = Math.floor(this.state.fetchData.length / 3) + 1;
                    let pages = [];
                    for( let i=0; i<count; i++){
                        pages.push(i+1);
                    }
                    this.setState({
                        pageNumber: pages
                    }, () => this.handlePages(0))
                });
            })
            .catch( err => alert(err) )
    }

    handlePages = (param) => {
        this.setState({
            arrWithThreeOrganizations: this.state.fetchData.slice(param * 3, (param * 3)+3)
        })
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
                        {this.state.arrWithThreeOrganizations.map( (elem,ind) => <li key={ind}><FundationBox key={ind} info={elem} thingsType={this.state.thingsType}/></li> )}
                    </ul>
                    <div className="pagging">
                    {this.state.pageNumber!==0 && this.state.pageNumber.map( (elem, ind) => <button key={ind} onClick={ () => this.handlePages(ind)}>{elem}</button>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Fundations;