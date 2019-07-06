import React, { Component } from 'react';
import Pokedex from './Pokedex';
import './Pokegame.css';

class Pokegame extends Component {
    
    render() {
        let pokemon =  [ 
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]

        let hand1 = [];
        let hand2 =[];

        for (let i = 0; i < 4; i++) {
            hand1.push(pokemon[Math.floor(Math.random() * pokemon.length)]);
            hand2.push(pokemon[Math.floor(Math.random() * pokemon.length)]);
        }

        let score1 =0;
        let score2 =0;

        for (let i = 0; i < 4; i++) {
            score1 += hand1[i].base_experience;
            score2 += hand2[i].base_experience;
        }
        
        let isWin1 = '';
        let isWin2 = '';
        if (score1>score2){
            isWin1 = 1;
            isWin2 = 0;
        } else if (score1<score2) {
            isWin2 = 1;
            isWin1 = 0;
        } 



        return(
            <div className="Pokegame">
                <Pokedex pokemon={hand1} total={score1} isWinner={isWin1}  />
                <Pokedex pokemon={hand2} total={score2}  isWinner={isWin2} />

            </div>
        );


        
    }
}

export default Pokegame;

