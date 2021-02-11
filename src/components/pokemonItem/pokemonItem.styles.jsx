import styled from 'styled-components';

export const PokemonContainer = styled.div`
    float:left;
    width: 155px;
    height: 180px;
    background:#fff; 
    margin: 0 10px 10px;
    border-radius: 10px;
    text-align: center;
`

export const PokemonImg = styled.img`
    margin: 0 auto;
    width: 100px;
    display: block;
`
export const UnknowPokemon = styled.div`
    width: 50px;
    height: 50px;
    margin: 20px auto;
    background: #BF0C0C;
    border-radius: 50%;
    position:relative;
    font-size: 35px;
    color: #fff;
    line-height: 47px;

    &::before{
        position: absolute;
        content: "";
        width: 100%;
        height: 2px;
        left: 0;
        top: 25px;
        background: #fff;
    }
`

export const PokemonName = styled.div`
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
    text-transform: uppercase;
`