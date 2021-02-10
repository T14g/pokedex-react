import React from 'react';
import { InfoContainer, PokemonName } from './pokemonInfo.styles';
import { PokemonTypes } from '../pokemonTypes/pokemonTypes.component';
import { PokemonInfoList } from '../pokemonInfoList/pokemonInfoList.component';

export const PokemonInfo = ({ pokemonData }) => {

    let abilityNames = [], movesNames = [];

    //Formata os nomes deixando capitalized
    pokemonData.abilities.map(item => {
        let name = item.ability.name;
        name = name.charAt(0).toUpperCase() + name.slice(1);
        abilityNames.push(name);
    })

    //Formata os nomes deixando capitalized
    pokemonData.moves.map(item => {
        let name = item.move.name;
        name = name.charAt(0).toUpperCase() + name.slice(1);
        movesNames.push(name);
    })

    return (
        <InfoContainer>
            <PokemonName>{pokemonData.name} #{pokemonData.id}</PokemonName>
            <PokemonTypes types={pokemonData.types} />
            <PokemonInfoList color="green" title="Pokemon Abilities" data={abilityNames} />
            <PokemonInfoList color="red" title="Pokemon Moves" data={movesNames} />
        </InfoContainer>
    );
}

