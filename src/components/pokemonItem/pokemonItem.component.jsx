import React from 'react';
import { connect } from 'react-redux';
import { pokemonDetails } from '../../redux/pokemon/pokemon.actions';

import { PokemonTypes } from '../pokemonTypes/pokemonTypes.component';

import { PokemonContainer, PokemonImg, UnknowPokemon, PokemonName } from './pokemonItem.styles';

const PokemonItem = ({ pokemon, viewDetails }) => (
    <PokemonContainer
        onClick={() => viewDetails(pokemon)}
    >
        {
            pokemon.sprites.front_default !== null ?
                (<PokemonImg src={pokemon.sprites.front_default} alt={pokemon.name} />) :
                (<UnknowPokemon>?</UnknowPokemon>)
        }
        <PokemonName>{pokemon.name}</PokemonName>
        <PokemonTypes types={pokemon.types} />
    </PokemonContainer>
);

const mapDispatchToProps = dispatch => ({
    viewDetails: (pokemon => dispatch(pokemonDetails(pokemon)))
})

export default connect(null, mapDispatchToProps)(PokemonItem);
