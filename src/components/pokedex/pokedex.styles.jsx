import styled, { keyframes } from 'styled-components';

const RollUpAnimation = keyframes`
 0% { heigth: 100% }
 100% { height: 0 }
`

const FadeOutAnimation = keyframes`
0% { opacity: 1; z-index: 9999 }
100% { height: 0 ; z-index: -1}
`

export const PokedexCase = styled.div`
    background: #BF0C0C;
    height 565px;
    width: 100%;
    max-width: 1000px;
    margin: 20px auto 0;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    -webkit-box-shadow: 1px 5px 15px 5px #000000; 
    box-shadow: 1px 5px 15px 5px #000000;
    padding-top: 50px;

    @media(max-width: 1200px){
        max-width: 800px;
    }

    @media(max-width: 800px){
        max-width: 310px;
        height: 520px;
    }
`

export const PokedexScreen = styled.div`
    padding: 15px;
    background: ${ props => props.hasPokemons > 0  ? '#71C6C5' : '#000' };
    height 400px;
    width: 900px;
    margin: 0 auto;
    -webkit-box-shadow: inset 5px 5px 15px -3px #000000; 
    box-shadow: inset 5px 5px 15px -3px #000000;
    overflow: ${ props => props.loading === true ? 'hidden' : 'auto' };
    position: relative;

    @media(max-width: 1200px){
        width: 700px;
    }

    @media(max-width: 800px){
        width: 233px;
    }

    &::after{
        content: "";
        display: block;
        position: absolute;
        top: 0;
        background: #920c0c;
        -webkit-box-shadow: inset 1px 1px 4px 2px #000000; 
        box-shadow: inset 1px 1px 4px 2px #000000;
        width: 100%;
        height: 100%;
        left: 0;
        z-index: 9998;

        animation: ${RollUpAnimation} 3s 2s;
        animation-fill-mode: forwards;
    }

    &::before{
        content: "Pokedex Infinity  By : T14g";
        text-align: center;
        color: #fff;
        position: absolute;
        top: 140px;
        width: 100%;
        max-width: 450px;
        height: 200px;
        left: calc(50% - 225px);
        display: block;
        z-index: 9999;
        font-family: 'VT323', monospace;
        font-size: 70px;
        text-transform: uppercase;

        animation: ${FadeOutAnimation} 1s 1s;
        animation-fill-mode: forwards;
    }
`

export const ButtonContainer = styled.div`
    height: 90px;
    width: 90px;
    background: #c7c7c7;
    border-radius: 50%;
    margin-left: 35px;
    margin-top: 25px;
`

export const ButtonInner = styled.div`
    height: 70px;
    width: 70px;
    background: #66CCFF;
    border-radius: 50%;
    margin: 0 auto;
    top: 50%;
    position: relative;
    transform: translateY(-50%);
    border: 1px #000 solid;
    transition: 1s;

    &:hover{
        background: #37a9e2;
        cursor: pointer;
    }

    &::after{
        position: absolute;
        content: "";
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background : #fff;
        top: 10px;
        left: 17px;
    }
` 