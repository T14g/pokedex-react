import React from 'react';
import { PokemonContainer, PokemonImg } from './pokemonItem.styles';

export const PokemonItem = ({pokemon}) => (
    <PokemonContainer>
        <PokemonImg src={pokemon.sprites.front_default} alt={pokemon.name}/>
        <span>{pokemon.name}</span>
    </PokemonContainer>
);