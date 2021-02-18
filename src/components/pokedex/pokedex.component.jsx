import { React, useEffect } from 'react';
import { PokedexCase, PokedexScreen } from './pokedex.styles';
import { CustomButton } from '../customButton/customButton.component';
import { Loader } from '../loader/loader.component';
import PokemonList from '../pokemonList/pokemonList.component';
import PokemonDetails from '../pokemonDetails/pokemonDetails.component';

import { connect } from 'react-redux';
import { savePokemons, loadHome, showLoader, hideLoader } from '../../redux/pokemon/pokemon.actions';

const Pokedex = ({
    savePokemonsState,
    pokemonList,
    offset,
    viewDetails,
    loadHome,
    loading,
    showLoader,
    hideLoader
}) => {

    // Faz o fetch inicial de 100 pokemons, apenas uma única vez
    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
    //             .then(response => response.json())
    //             .then(pokemons => {
    //                 savePokeDetails(pokemons.results)
    //             })
    //     }, 5000);
    // }, []);

    //Verifica se chegou no final do scroll Y e carrega mais pokemons
    const handleScroll = (e) => {

        if (!viewDetails) {
            let element = e.target;

            if (element.scrollHeight - element.scrollTop === element.clientHeight) {
                fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=${offset}`)
                    .then(response => response.json())
                    .then(pokemons => {
                        savePokeDetails(pokemons.results);
                    })
            }
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

        //Dispara a action que vai exibir o loader
        showLoader();
        const promises = pokemons.map(pokemon => fetchPokeDetails(pokemon.url));

        Promise.all(promises).then(results => {

            const filteredResults = results.filter(result => result !== null);
            savePokemonsState(filteredResults);

            //Dispara a action que vai esconder o loader
            hideLoader();

        })
    }

    return (
        <PokedexCase>
            <PokedexScreen loading={loading.toString()} onScroll={handleScroll} hasPokemons={pokemonList.length}>
                {
                    !viewDetails ? <PokemonList list={pokemonList} /> : <PokemonDetails />
                }
            </PokedexScreen>
            <Loader loading={loading.toString()} />
            <CustomButton name="Back" show={viewDetails} onClickFn={loadHome} />
        </PokedexCase>
    )
}

//Despachantes de actions
const mapDispatchToProps = dispatch => ({
    savePokemonsState: pokemons => dispatch(savePokemons(pokemons)),
    loadHome: () => dispatch(loadHome()),
    showLoader: () => dispatch(showLoader()),
    hideLoader: () => dispatch(hideLoader()),
})

//Acesso ao state
const mapStateToProps = state => ({
    pokemonList: state.pokemon.pokemons,
    offset: state.pokemon.offset,
    viewDetails: state.pokemon.viewDetails,
    loading: state.pokemon.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);