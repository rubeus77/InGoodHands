import React, { Component } from 'react';
import BigFormBar from './big-form-bar';

class BigForm extends Component {
    state ={
        steps: 1,
        info: [
            <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dziękitemu będziemy wiedzieć komu najlepiej je przekazać</p>,
            <p>Wszystkie rzeczy zapakuj w 60 l worki. Dokładną instrujcję jak poprawnie spakować rzeczy znajdziesz <a href="/">TUTAJ</a></p>,
            <p>Na podstawie Twoich kryteriów oraz rzezczy, które masz do oddania wybraliśmy organizacje, którym możesz pomóc.<br/>Wybierz jedną, do której trafi Twoja przesyłka.</p>,
            <p>Jeżeli wiesz komu chcesz pomóc, możesz wpisac nazwe tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy</p>,
            <p>Podaj adres oraz termin odbioru rzezczy.</p>
        ],
        thingsType: null,
        selectedThings: [],
        packNumber: 0,
        forSelect: Array(9).fill(0)
    }
    componentDidMount () {
        fetch("http://localhost:3001/thingsType")
        .then( resp => resp.json())
        .then( data => {
            this.setState({
                thingsType: data
            })
        })
    }

    handleChange = event =>{
        this.setState({
            [event.target.name]: [...this.state.selectedThings, event.target.value]
        }, () => console.log("selectedThings "+this.state.selectedThings))
    }
    render () {
        switch (this.state.steps){
            case 0: 
                return(
                    <div className="BigForm">
                        <BigFormBar info={this.state.info[this.state.steps]} />
                        {this.state.thingsType!==null && (
                            //TODO: dokończyć chyba trzeba będzie to zrobic na select i przyciski
                                this.state.thingsType.map( elem => <p key={elem.id}> <input type="checkbox" key={elem.id} value={elem.id} name="selectedThings" onChange={this.handleChange} /> {elem.type} </p>)
                        )}

                    </div>
                )
            case 1:
                return(
                    <div className="BigForm">
                        <BigFormBar info={this.state.info[this.state.steps]} />
                        <div>
                            <h1> Podaj liczbę 60 l worków, w które spakowałes/aś rzeczy:</h1>
                            <select value="- wybierz -">
                                {this.state.forSelect.map( (elem, ind)=> <option value={ind +1} key={ind}>{ind +1}</option> )}
                                <option value="100">>10</option>
                                
                            </select>
                        </div>
                    </div>
                )
                

            default: return null
        }
    }
}

export default BigForm;