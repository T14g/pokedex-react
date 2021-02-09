import React from 'react';
import { Type } from './pokemonTypes.styles';

export const PokemonTypes = ({ types }) => {

    return (
        <React.Fragment>
            {
                types.map(item => {
                    const tipo = item.type.name;
                    return <Type key={tipo}>{tipo}</Type>
                })
            }
        </React.Fragment>
    );
}