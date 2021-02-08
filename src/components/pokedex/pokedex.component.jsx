import { React , useEffect } from 'react';
import { PokedexCase, PokedexScreen} from './pokedex.styles';
import { PokemonList } from '../pokemonList/pokemonList.component';

import { connect } from 'react-redux';
import { savePokemons } from '../../redux/pokemon/pokemon.actions';

const Pokedex = ({ savePokemonsState, pokemonList }) => {

    //Faz o fetch inicial de 100 pokemons, apenas uma única vez
    useEffect(() => {

        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
        .then(response => response.json())
        .then(pokemons => {
            savePokeDetails(pokemons.results)
        })

    },[]);

    //Verifica se chegou no final do scroll Y
    const handleScroll = (e) => {
        let element = e.target;
        if (element.scrollHeight - element.scrollTop === element.clientHeight){

        }
    }

    //Busca detalhes de cada pokemon
    const fetchPokeDetails = async (url) => {
        return await fetch(url)
        .then(response =>response.json())
    }

    //Salva as informações detalhadas dos pokemons
    const savePokeDetails = (pokemons) => {
        const promises = pokemons.map(pokemon => fetchPokeDetails(pokemon.url));
        Promise.all(promises).then(results => {
            savePokemonsState(results);
        })
    }

    return(
        <PokedexCase>
            <PokedexScreen id="pokedexScroll" onScroll={handleScroll}>
                <PokemonList list={pokemonList} />
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
    pokemonList : state.pokemon.pokemons
})

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);