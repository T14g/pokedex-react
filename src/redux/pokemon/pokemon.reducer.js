import PokemonActionTypes from './pokemon.types';

const INITIAL_STATE = {
    pokemons: [],
    offset: 100
}

const pokemonReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PokemonActionTypes.SAVE_POKEMONS:
            return {
                ...state,
                pokemons: [...state.pokemons, ...action.payload],
                offset: state.offset + 100
            }

        default:
            return state;
    }
}

export default pokemonReducer;

