import React from 'react';
import { InfoContainer, PokemonName } from './pokemonInfo.styles';
import { PokemonTypes } from '../pokemonTypes/pokemonTypes.component';

export const PokemonInfo = ({ pokemonData }) => {
    console.log(pokemonData);
    return (
        <InfoContainer>
            <PokemonName>{pokemonData.name} #{pokemonData.id}</PokemonName>
            <PokemonTypes types={pokemonData.types} />
        </InfoContainer>
    );
}

