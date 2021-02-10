import React from 'react';
import { connect } from 'react-redux';
import { DetailsContainer } from './pokemonDetails.styles';
import { PokemonSprites } from '../pokemonSprites/pokemonSprites.component';
import { PokemonInfo } from '../pokemonInfo/pokemonInfo.component';

const PokemonDetails = ({ pokemonData }) => {
    return (
        <DetailsContainer>
            <PokemonSprites sprites={pokemonData.sprites} />
            <PokemonInfo pokemonData={pokemonData} />
        </DetailsContainer>
    );
}

const mapDispatchToProps = state => ({
    pokemonData: state.pokemon.selectedPokemon
})

export default connect(mapDispatchToProps)(PokemonDetails);


