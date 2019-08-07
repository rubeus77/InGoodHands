import React, { Component } from 'react';
import BigFormBar from './big-form-bar';
import Ornament from './ornament';
import bag from '../assets/images/bag.png';
import heart from '../assets/images/heart.png';

class BigForm extends Component {
    state ={
        steps: 0,
        info: [
            <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać</p>,
            <p>Wszystkie rzeczy zapakuj w 60 l worki. Dokładną instrujcję jak poprawnie spakować rzeczy znajdziesz <a href="/">TUTAJ</a></p>,
            <p>Na podstawie Twoich kryteriów oraz rzezczy, które masz do oddania wybraliśmy organizacje, którym możesz pomóc.<br/>Wybierz jedną, do której trafi Twoja przesyłka.</p>,
            <p>Jeżeli wiesz komu chcesz pomóc, możesz wpisac nazwe tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy</p>,
            <p>Podaj adres oraz termin odbioru rzezczy.</p>
        ],
        thingsType: null,
        selectedThings: [],
        packNumber: 0,
        forSelect: Array(9).fill(0),
        place: [],
        selectedPlace: '',
        organizationsData: [],
        forWho: [],
        organizationNameText: '',
        choosenOrg: [],
        foundedOrg: [],
        street: '',
        city: '',
        postcode: '',
        phone: '',
        date: '',
        time: '',
        remarks: ''
        
    }
    componentDidMount () {
        let tempPlace=[];
        let tempForWho=[];
        fetch("http://localhost:3001/thingsType")
        .then( resp => resp.json())
        .then( data => {
            this.setState({
                thingsType: data,
                selectedThings: Array(data.length).fill(false)
            })
        })
        .catch( err => alert(err));
        //TODO: wymusić kolejność działań
        fetch("http://localhost:3001/fundations")
        .then( resp => resp.json())
        .then( data => this.setState({
            organizationsData: [...this.state.organizationsData, ...data]
        }) )
        .catch( err => alert(err));
        fetch("http://localhost:3001/ngo")
        .then( resp => resp.json())
        .then( data => this.setState({
            organizationsData: [...this.state.organizationsData, ...data]
        }) )
        .catch( err => alert(err));
        fetch("http://localhost:3001/locals")
        .then( resp => resp.json())
        .then( data => {
            this.setState({
                organizationsData: [...this.state.organizationsData, ...data]
            }, () => {
                for (let i = 0; i < this.state.organizationsData.length; i++ ){
                    tempPlace.push(this.state.organizationsData[i].place);
                    tempForWho.push(this.state.organizationsData[i].forWho)
                }
                tempPlace.sort();
                tempForWho.sort();
    
                tempPlace = this.arrayUnique(tempPlace);
                tempForWho = this.arrayUnique(tempForWho);
                
                this.setState({
                    place: tempPlace,
                    forWho: tempForWho
                })
            }) 
        })
        .catch( err => alert(err));

        
    }

    arrayUnique = (arr) => {
        return arr.filter(function(item, index){
            return arr.indexOf(item) >= index;
        });
    };
    
    handleSelectThings = (event, index) => {
        let temp=this.state.selectedThings;
        temp[index]=!this.state.selectedThings[index];
        this.setState({
            selectedThings: temp
        })
    }

    handleNextPage = () => {
        this.setState({
            steps: this.state.steps + 1
        })
    }

    handlePrevPage = () => {
        this.setState({
            steps: this.state.steps - 1
        })
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    //TODO: do usunięcia jak będzie się sprawdzał handleChange
    handleClick = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSearch = () => {
        let tempOrgsName= [];
        this.state.organizationsData.map( (elem) => tempOrgsName.push(elem.place) );
        if(this.state.organizationNameText.length > 0 ){
            if (tempOrgsName.indexOf(this.state.organizationNameText) > 0){
                this.setState({
                    choosenOrg: this.state.organizationsData[tempOrgsName.indexOf(this.state.organizationNameText)]
                })
            }
        }else{

        }

        this.handleNextPage();
    }

    handleConfirm = () => {
        let tempData={};
        fetch("http://localhost:3001/app")
        .then( resp => resp.json())
        .then(data => {
            tempData={...data};
            tempData.helpInNumbers[0]+= this.state.packNumber;
            tempData.helpInNumbers[1]++;
            tempData.helpInNumbers[2]++;
  
            fetch("http://localhost:3001/app", {
                method: "PUT",
                body: JSON.stringify(tempData),
                headers:{
                    'Content-Type':'application/json'
                }
            }).catch( err => alert(err));
            this.handleNextPage();
        }).catch( err => alert(err) );

    }
    render () {
        switch (this.state.steps){
            case 0: 
                return(
                    <div className="BigForm">
                        <BigFormBar info={this.state.info[this.state.steps]} />
                        <p>Krok 1/4</p>
                        <div>
                            <h2>Zaznacz co chcesz oddać:</h2>
                            {this.state.thingsType!==null && (
                                <ul>
                                 {this.state.thingsType.map( (elem, ind) => <li key={ind}>
                                    <input type="checkbox" onChange={ e => this.handleSelectThings (e, ind)} key={ind} checked={this.state.selectedThings[ind]}/>
                                    {elem.type}
                                 </li> )}
                                </ul>
                            )}
                        </div>
                        <div>
                            <button onClick={this.handleNextPage}>Dalej</button>
                        </div>
                        
                    </div>
                )
            case 1:
                return(
                    <div className="BigForm">
                        <BigFormBar info={this.state.info[this.state.steps]} />
                        <p>Krok 2/4</p>
                        
                        <div>
                            <h2> Podaj liczbę 60 l worków, w które spakowałes/aś rzeczy:</h2>
                            Liczba 60 l worków: 
                            <select name="packNumber" onChange={this.handleChange}>
                                <option value="-1">- wybierz -</option>
                                {this.state.forSelect.map( (elem, ind)=> <option value={ind + 1} key={ind}>{ind + 1}</option> )}
                                <option value="100">>10</option>  
                            </select>
                        </div>
                        <div>
                            <button onClick={this.handlePrevPage}>Wstecz</button>
                            <button onClick={this.handleNextPage}>Dalej</button>
                        </div>
                    </div>
                )
            case 2:
                return(
                    <div className="BigForm">
                    <BigFormBar info={this.state.info[this.state.steps]} />
                    <p>Krok 3/4</p>
                    
                        <div>
                            <h2>Lokalizacja:</h2> 
                            <select name="selectedPlace" onChange={this.handleChange}>
                                <option value="">- wybierz -</option>
                                {this.state.place.map( (elem, ind)=> <option value={elem} key={ind}>{elem}</option> )}  
                            </select>
                            <p>Komu chcesz pomóc ?</p>
                            {this.state.forWho.map( (elem) => <button key={elem} onClick={this.handleChange} value={elem}>{elem}</button>)}
                            <p>Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
                            <input type="text" name="organizationNameText" onChange={this.handleChange} />
                        </div>
                    
                    
                    <div>
                        <button onClick={this.handlePrevPage}>Wstecz</button>
                        <button onClick={this.handleSearch}>Szukaj</button>
                    </div>
                </div>
                )
            case 3:
                return(
                    <div className="BigForm">
                    <BigFormBar info={this.state.info[this.state.steps]} />
                    <p>Krok 3/4</p>
                    
                        <div>
                            <h2>Wybierz organizację:</h2> 
                            {this.state.foundedOrg!==null && (
                                <ul>
                                 {this.state.foundedOrg.map( (elem, ind) => <li key={ind}>
                                    <input type="checkbox" onChange={ e => this.handleChange (e, elem.id)} key={ind}/>
                                    <h2>{elem.name}</h2>
                                    <p>{elem.about}</p>
                                 </li> )}
                                </ul>
                            )}
                        </div>
                    
                    
                        <div>
                            <button onClick={this.handlePrevPage}>Wstecz</button>
                            <button onClick={this.handleNextPage}>Dalej</button>
                        </div>
                    </div>
                )
            case 4:
                return(
                    <div className="BigForm">
                    <BigFormBar info={this.state.info[this.state.steps]} />
                    <p>Krok 4/4</p>
                    
                        <div>
                            <h2>Podaj adres oraz termin odbioru rzeczy przez kuriera:</h2> 
                            <div>
                                <div className="left">
                                    <p>Ulica</p>
                                    <input name="street" onChange={this.handleChange} value={this.state.street}/>
                                    <p>Miasto</p>
                                    <input name="city" onChange={this.handleChange} value={this.state.city}/>
                                    <p>Kod pocztowy</p>
                                    <input name="postcode" onChange={this.handleChange} value={this.state.postcode}/>
                                    <p>Numer telefonu</p>
                                    <input name="phone" onChange={this.handleChange} value={this.state.phone}/>
                                </div>
                                <div className="right">
                                    <p>Data</p>
                                    <input name="date" onChange={this.handleChange} value={this.state.date}/>
                                    <p>Godzina</p>
                                    <input name="time" onChange={this.handleChange} value={this.state.time}/>
                                    <p>Uwagi dla kuriera</p>
                                    <input name="remarks" onChange={this.handleChange} value={this.state.remarks}/>
                                </div>
                            </div>
                        </div>
                    
                    
                        <div>
                            <button onClick={this.handlePrevPage}>Wstecz</button>
                            <button onClick={this.handleNextPage}>Dalej</button>
                        </div>
                    </div>
                )
            case 5:
                return(
                    <div>
                        <h1>Podsumowanie Twojej darowizny</h1>
                        <h2>Oddajesz:</h2>
                        <div>
                            <img src={bag} alt="bag"></img>
                            <p>{this.state.packNumber} </p> {/* //TODO: dokończyć} */}
                        </div>
                        <div>
                            <img src={heart} alt="heart"></img>
                            <p>{this.state.choosenOrg}</p>
                        </div>
                        <div>
                            <div className="left">
                                <p>Ulica</p>
                                <input name="street" onChange={this.handleChange} value={this.state.street}/>
                                <p>Miasto</p>
                                <input name="city" onChange={this.handleChange} value={this.state.city}/>
                                <p>Kod pocztowy</p>
                                <input name="postcode" onChange={this.handleChange} value={this.state.postcode}/>
                                <p>Numer telefonu</p>
                                <input name="phone" onChange={this.handleChange} value={this.state.phone}/>
                            </div>
                            <div className="right">
                                <p>Data</p>
                                <input name="date" onChange={this.handleChange} value={this.state.date}/>
                                <p>Godzina</p>
                                <input name="time" onChange={this.handleChange} value={this.state.time}/>
                                <p>Uwagi dla kuriera</p>
                                <input name="remarks" onChange={this.handleChange} value={this.state.remarks}/>
                            </div>
                        </div>
                        <div>
                            <button onClick={this.handlePrevPage}>Wstecz</button>
                            <button onClick={this.handleConfirm}>Potwierdzam</button>
                        </div>
                    </div>
                )
            case 6:
                return(
                    <div>
                        <Ornament text={<React.Fragment><h1>Dziękujemy za przesłanie formularza</h1><h1>Na maila prześlemy wszelkie informacje o odbiorze.</h1></React.Fragment>} />
                    </div>
                )
            default: return null
        }
    }
}

export default BigForm;