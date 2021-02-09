import React from 'react';
import { PokemonContainer, PokemonImg, UnknowPokemon } from './pokemonItem.styles';

export const PokemonItem = ({ pokemon }) => (
    <PokemonContainer>
        {
            pokemon.sprites.front_default !== null ?
                (<PokemonImg src={pokemon.sprites.front_default} alt={pokemon.name} />) :
                (<UnknowPokemon>?</UnknowPokemon>)
        }
        <span>{pokemon.name}</span>
    </PokemonContainer>
);