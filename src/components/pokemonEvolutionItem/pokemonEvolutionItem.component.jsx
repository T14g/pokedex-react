import React from 'react';
import { connect } from 'react-redux';
import { PokemonTypes } from '../pokemonTypes/pokemonTypes.component';
import { EvolutionContainer, EvolutionImg, Infos, Name } from './pokemonEvolutionItem.styles';
import { pokemonDetails } from '../../redux/pokemon/pokemon.actions';

const EvolutionItem = ({ pokemon, selected, selectThis }) => {

    const selectedName = selected.name;
    const frontImg = pokemon.sprites.front_default;
    const id = pokemon.id;
    const name = pokemon.name;
    const types = pokemon.types;

    //Verifica se é o pokemon selecionado
    const isSelected = () => (
        selectedName === pokemon.name ? true : false
    )

    return (
        <EvolutionContainer onClick={() => selectThis(pokemon)} selected={isSelected()}>
            <EvolutionImg src={frontImg} />
            <Infos>
                <Name>{name} #{id}</Name>
                <PokemonTypes types={types} />
            </Infos>
        </EvolutionContainer>
    );
}

const mapStateToProps = state => ({
    selected: state.pokemon.selectedPokemon
})

const mapDispatchToProps = dispatch => ({
    selectThis: pokemon => dispatch(pokemonDetails(pokemon))
})

export default connect(mapStateToProps, mapDispatchToProps)(EvolutionItem);
