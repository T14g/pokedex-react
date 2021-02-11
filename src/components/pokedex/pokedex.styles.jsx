import styled from 'styled-components';

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
`

export const PokedexScreen = styled.div`
    padding: 15px;
    background: #71C6C5;
    height 400px;
    width: 900px;
    margin: 0 auto;
    -webkit-box-shadow: inset 5px 5px 15px -3px #000000; 
    box-shadow: inset 5px 5px 15px -3px #000000;
    overflow: ${ props => props.loading === true ? 'hidden' : 'auto' };
    position: relative;
`