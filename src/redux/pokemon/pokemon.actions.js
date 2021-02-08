import PokemonActionTypes from './pokemon.types';

export const savePokemons = pokemons => ({
    type: PokemonActionTypes.SAVE_POKEMONS,
    payload: pokemons
});
