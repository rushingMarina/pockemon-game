import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
    static defaultProps = {
        id: 4, 
        name: 'Charmander', 
        type: 'fire', 
        base_experience: 62
    }



render() {
    let id = '';
    let zeros = '';
    if (this.props.id.toString().length<3) {
        let plus = 3 - this.props.id.toString().length;
        for (let i = 0; i<plus; i++) {
            zeros += '0';
        }
        id = zeros + this.props.id.toString();
        
    }
    else {
        id = this.props.id;
    }
    let imageLink = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
    return (
        <div className='Pokecard'>
            <h2 className='Pokecard-name'>{this.props.name}</h2>
            <img src={imageLink} className='Pokecard-img' />
            <h3 className='Pokecard-type'>{this.props.type}</h3>
            <div className='Pokecard-exp'>EXP: {this.props.base_experience}</div>
        </div>
    )

}

}

export default Pokecard;