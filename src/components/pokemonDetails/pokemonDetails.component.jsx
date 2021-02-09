import React from 'react';
import { connect } from 'react-redux';

const PokemonDetails = ({ pokemonData }) => {
    return (
        <div>
            <h2>Detalhes do pokemon</h2>
        </div>
    );
}

const mapDispatchToProps = state => ({
    pokemonData: state.pokemon.selectedPokemon
})

export default connect(mapDispatchToProps)(PokemonDetails);


