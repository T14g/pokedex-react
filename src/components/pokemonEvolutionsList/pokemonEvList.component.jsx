import React from 'react';
import { Container, Title } from './pokemonEvolutionsList.styles';
import EvolutionItem from '../pokemonEvolutionItem/pokemonEvolutionItem.component';

export const EvolutionList = ({ list }) => {

    return (
        <Container>
            { list.length > 0 ? <Title>Evolution Chain</Title> : null}
            {
                list.map((item, index) => (
                    <EvolutionItem key={index} pokemon={item} />
                ))
            }
        </Container>
    );
}

