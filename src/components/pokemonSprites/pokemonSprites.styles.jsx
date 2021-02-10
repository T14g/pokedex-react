import styled from 'styled-components';

export const SpritesContainer = styled.div`
    border: 1px #c6c6c6 solid;
    min-height: 180px;
    width: 228px;
    background: #fff;
    position: relative;
    padding: 5px;
    border-radius: 5px;
    float: left;
`

export const BigSprite = styled.img`
    display: block;
    margin: 10px auto 0;
`

export const BigContainer = styled.div`
    border: 1px #000 solid;
    min-height: 122px;
    width: 222px;
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
`