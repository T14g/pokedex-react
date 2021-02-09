import { React, useEffect } from 'react';
import { PokedexCase, PokedexScreen } from './pokedex.styles';
import PokemonList from '../pokemonList/pokemonList.component';
import PokemonDetails from '../pokemonDetails/pokemonDetails.component';

import { connect } from 'react-redux';
import { savePokemons } from '../../redux/pokemon/pokemon.actions';

const Pokedex = ({ savePokemonsState, pokemonList, offset, viewDetails }) => {

    //Faz o fetch inicial de 100 pokemons, apenas uma única vez
    useEffect(() => {

        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(response => response.json())
            .then(pokemons => {
                savePokeDetails(pokemons.results)
            })

    }, []);

    //Verifica se chegou no final do scroll Y e carrega mais pokemons
    const handleScroll = (e) => {

        let element = e.target;

        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=${offset}`)
                .then(response => response.json())
                .then(pokemons => {
                    savePokeDetails(pokemons.results);
                })
        }
    }

    //Busca detalhes de cada pokemon
    const fetchPokeDetails = async (url) => {
        return await fetch(url)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    return null;
                }
            })
    }

    //Salva as informações detalhadas dos pokemons
    const savePokeDetails = (pokemons) => {

        const promises = pokemons.map(pokemon => fetchPokeDetails(pokemon.url));

        Promise.all(promises).then(results => {

            const filteredResults = results.filter(result => result !== null);
            savePokemonsState(filteredResults);

        })
    }

    return (
        <PokedexCase>
            <PokedexScreen id="pokedexScroll" onScroll={handleScroll}>
                {
                    !viewDetails ? <PokemonList list={pokemonList} /> : <PokemonDetails />
                }
            </PokedexScreen>
        </PokedexCase>
    )
}

//Despachantes de actions
const mapDispatchToProps = dispatch => ({
    savePokemonsState: pokemons => dispatch(savePokemons(pokemons))
})

//Acesso ao state
const mapStateToProps = state => ({
    pokemonList: state.pokemon.pokemons,
    offset: state.pokemon.offset,
    viewDetails: state.pokemon.viewDetails
})

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);