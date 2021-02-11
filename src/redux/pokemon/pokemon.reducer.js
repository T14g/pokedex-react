import PokemonActionTypes from './pokemon.types';

const INITIAL_STATE = {
    pokemons: [],
    offset: 100,
    viewDetails : false,
    selectedPokemon: null,
    loading: false
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
        
        case PokemonActionTypes.LOAD_HOME:
            return {
                ...state,
                selectedPokemon: null,
                viewDetails: false
            }
        
        case PokemonActionTypes.SHOW_LOADER:
            return {
                ...state,
                loading: true
            }

        case PokemonActionTypes.HIDE_LOADER:
            return {
                ...state,
                loading: false
            }

        default:
            return state;
    }
}

export default pokemonReducer;

