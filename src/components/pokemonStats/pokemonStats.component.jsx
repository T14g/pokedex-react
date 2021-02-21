import React from 'react';
import { Container, PercentOutter, PercentInner, Title } from './pokemonStats.styles';

export const PokemonStats = ({ data }) => {

    const nameReduced = name => {

        switch (name) {
            case 'hp':
                return 'HP';

            case 'attack':
                return 'ATT';

            case 'defense':
                return 'DEF';

            case 'special-attack':
                return 'S. ATT';

            case 'special-defense':
                return 'S. DEF';

            case 'speed':
                return 'SPEED';
        }
    }

    return (
        <Container>
            <Title>Pokemon Stats</Title>
            {
                data.length > 0 ? (
                    data.map(item => (
                        <PercentOutter key={item.stat.name}>
                            <PercentInner percent={item.base_stat}>
                                {nameReduced(item.stat.name)} ({item.base_stat}%)
                            </PercentInner>
                        </PercentOutter>
                    ))
                ) : null
            }
        </Container>
    )
}