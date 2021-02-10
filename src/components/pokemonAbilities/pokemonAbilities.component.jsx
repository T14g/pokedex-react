import React from 'react';
import { Container, AbilitiesContainer, Title, Ability } from './pokemonAbilities.styles';

export const PokemonAbilities = ({ abilities }) => {

    let abilityNames = [];

    //Formata os nomes tirando - e deixando capitalized
    abilities.map(item => {
        let name = item.ability.name;
        name = name.charAt(0).toUpperCase() + name.slice(1);
        abilityNames.push(name);
    })

    return (
        <Container>
            <Title>Pokemon Abilities</Title>

            {
                abilityNames.map(ability =>
                    <Ability key={ability}>{ability}</Ability>
                )
            }

        </Container>
    );

}

