import React from 'react';
import { PokemonItem } from '../pokemonItem/pokemonItem.component';

export const PokemonList = ({list}) => {
    return(
        <div className="pokemon-list">
            {
                list.length > 0 ? (
                    list.map(pokemon =>{
                        return (<PokemonItem key={pokemon.name} pokemon={pokemon} />)
                    })
                ) : null
            }
        </div>
    );
}

