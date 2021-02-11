import React, { useState, useEffect } from 'react';
import { EvolutionList } from '../pokemonEvolutionsList/pokemonEvList.component';
import { connect } from 'react-redux';

const PokemonEvolutions = ({ data, pokemons }) => {

    const [compState, setCompState] = useState({ evolutions: [] });
    const { evolutions } = compState;
    const initialURL = data.url;

    useEffect(() => {

        fetch(initialURL)
            .then(response => response.json())
            .then(result => {
                let evolutionURL = result.evolution_chain.url;
                fetchEvolution(evolutionURL)
            })

    }, []);



    //GET evolution chain
    const fetchEvolution = url => {
        fetch(url)
            .then(response => response.json())
            .then(result => {
                extractData(result.chain);
            })
    }

    //Extrai as informações e armazena no array de evolutions
    const extractData = evolutionsData => {
        let evolutionsArray = [], resultArr, pokemonsDetails = [];
        //Primeira forma
        evolutionsArray.push(evolutionsData.species);

        //Verifica as próximas formas
        resultArr = findEvolutions(evolutionsData, []);
        evolutionsArray = [...evolutionsArray, ...resultArr];

        //Procura as informações dos pokemons no state
        evolutionsArray.map(pokemon => {
            let result = findPokemonState(pokemon.name)

            if (result !== undefined) {
                pokemonsDetails.push(result);
            }

        })

        setCompState({ evolutions: pokemonsDetails });

    }

    //Encontra evoluções se houver
    const findEvolutions = (start, arr) => {
        let arrEv = arr;

        if (start.evolves_to.length > 0) {
            arrEv.push(start.evolves_to[0].species);
            findEvolutions(start.evolves_to[0], arrEv);
        }

        return arrEv
    }

    //Procura no state se há informações sobre o pokemon
    const findPokemonState = name => (
        pokemons.filter(pokemon => pokemon.name === name)[0]
    )

    return (
        <>
            { evolutions.length > 0 ? <EvolutionList list={evolutions} /> : null}
        </>
    );
}

const mapStateToProps = state => ({
    pokemons: state.pokemon.pokemons
})

export default connect(mapStateToProps)(PokemonEvolutions);