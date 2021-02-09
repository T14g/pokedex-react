import PokemonActionTypes from './pokemon.types';

export const savePokemons = pokemons => ({
    type: PokemonActionTypes.SAVE_POKEMONS,
    payload: pokemons
});

export const pokemonDetails = pokemon => ({
    type: PokemonActionTypes.POKEMON_DETAILS,
    payload: pokemon
});
