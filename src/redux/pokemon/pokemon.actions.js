import PokemonActionTypes from './pokemon.types';

export const savePokemons = pokemons => ({
    type: PokemonActionTypes.SAVE_POKEMONS,
    payload: pokemons
});

export const pokemonDetails = pokemon => ({
    type: PokemonActionTypes.POKEMON_DETAILS,
    payload: pokemon
});

export const loadHome = () => ({
    type: PokemonActionTypes.LOAD_HOME
});

export const showLoader = () => ({
    type: PokemonActionTypes.SHOW_LOADER
});

export const hideLoader = () => ({
    type: PokemonActionTypes.HIDE_LOADER
});

