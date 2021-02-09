import PokemonActionTypes from './pokemon.types';

const INITIAL_STATE = {
    pokemons: [],
    offset: 100,
    viewDetails : false,
    selectedPokemon: null
}

const pokemonReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PokemonActionTypes.SAVE_POKEMONS:
            return {
                ...state,
                pokemons: [...state.pokemons, ...action.payload],
                offset: state.offset + 100
            }

        case PokemonActionTypes.POKEMON_DETAILS:
            return {
                ...state,
                selectedPokemon: action.payload,
                viewDetails: true
            }

        default:
            return state;
    }
}

export default pokemonReducer;

