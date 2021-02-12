import styled from 'styled-components';

export const InfoContainer = styled.div`
    background: #fff;
    border-radius: 5px;
    float: left;
    max-width: 570px;
    margin-left: 20px;
    width: 100%;

    @media(max-width: 1200px){
        max-width: 440px;
    }

    @media(max-width: 800px){
        width: initial;
        margin-top: 10px;
        margin-left: 0;
    }
`

export const PokemonName = styled.h3`
    margin: 0;
    text-transform: uppercase;
    padding: 0 5px;
`