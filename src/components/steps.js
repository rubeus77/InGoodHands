import React, { Component } from 'react';
import Ornament from './ornament';
import imgStep1 from '../assets/images/select.jpg';
import imgStep2 from '../assets/images/pack.png';
import imgStep3 from '../assets/images/whoHelps.png';
import imgStep4 from '../assets/images/orderCourier.png'


class Box extends Component {
    render () {
        return (
            <div className="Step-box">
                <div className="top">
                    <img src={this.props.info.src} alt={this.props.info.stepText}></img>
                    <p>{this.props.info.stepText}</p>
                </div>
                <div className="divider"></div>
                <p className="bottom-text">{this.props.info.whatText}</p>
            </div>
        )
    }
}

class Steps extends Component {
    state = {
        steps: [
            {
                src: imgStep1,
                stepText: "Wybierz rzeczy",
                whatText: "ubranka, zabawki, sprzęt i inne"
            },{
                src: imgStep2,
                stepText: "Spakuj je",
                whatText: "skorzystaj z worków na śmieci"
            },{
                src: imgStep3,
                stepText: "Zdecyduj komu chcesz pomóc",
                whatText: "wybierz zaufane miejsce"
            },{
                src: imgStep4,
                stepText: "Zamów kuriera",
                whatText: "kurier przyjedzie w dogodnym terminie"
            }
        ]
    }
    render () {
        return (
            <div className="Steps">
                <Ornament text={<h1>Wystarczą 4 proste kroki</h1>} />
                <div className="steps-middle-box">
                    {this.state.steps.map( (elem, ind) => <Box key={ind} info={elem} />)}
                </div>
                <button>Załóż konto</button>
            </div>
        )
    }
}

export default Steps;