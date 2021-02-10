import React from 'react';
import { List } from './pokemonList.styles';
import PokemonItem from '../pokemonItem/pokemonItem.component';

const PokemonList = ({ list }) => {
    return (
        <List>
            {
                list.length > 0 ? (
                    list.map(pokemon => {
                        return (<PokemonItem key={pokemon.id} pokemon={pokemon} />)
                    })
                ) : null
            }
        </List>
    );
}

export default PokemonList;
