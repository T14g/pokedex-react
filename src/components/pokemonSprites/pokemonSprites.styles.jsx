import styled from 'styled-components';

export const SpritesContainer = styled.div`
    border: 1px #c6c6c6 solid;
    width: 228px;
    background: #fff;
    position: relative;
    padding: 5px;
    border-radius: 5px;
    float: left;

    @media(max-width: 1200px){
        width: 150px;
    }

    @media(max-width: 800px){
        width: 200px;
    }
`

export const BigSprite = styled.img`
    display: block;
    margin: 10px auto 0;
`

export const UnknowPokemon = styled.div`
    width: 50px;
    height: 50px;
    margin: 35px auto 0;
    background: #BF0C0C;
    border-radius: 50%;
    position:relative;
    font-size: 35px;
    color: #fff;
    line-height: 47px;
    text-align:center;

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

export const BigContainer = styled.div`
    border: 1px #000 solid;
    min-height: 122px;
    width: 222px;

    @media(max-width: 1200px){
        width: 148px;
    }

    @media(max-width: 800px){
        width: 195px;
    }
`

export const MiniContainer = styled.div`
    margin-top: 15px;
    
    &::after{
        display: table;
        content: "":
        clear: both;
    }
`

export const MiniSprite = styled.img`
    height: 40px;
    width:  40px;
    padding: 5px;
    border: 1px #000 solid;

    &:not(:last-child){
        margin-right: 5px;
    }

    @media(max-width: 800px){
        height: 33px;
        width: 33px
    }
`