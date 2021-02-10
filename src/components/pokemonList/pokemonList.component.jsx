import React from 'react';
import PokemonItem from '../pokemonItem/pokemonItem.component';

const PokemonList = ({ list }) => {
    return (
        <div className="pokemon-list">
            {
                list.length > 0 ? (
                    list.map(pokemon => {
                        return (<PokemonItem key={pokemon.id} pokemon={pokemon} />)
                    })
                ) : null
            }
        </div>
    );
}

export default PokemonList;
