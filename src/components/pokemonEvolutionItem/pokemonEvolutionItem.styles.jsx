import styled from 'styled-components';

export const EvolutionContainer = styled.div`
    border: 3px ${props => props.selected ? '#BF0C0C' : '#c6c6c6'} solid;
    margin-bottom: 10px;
    padding: 10px;
    
    &:hover{
        cursor: pointer;
    }

    &::after{
        display: table;
        content: "";
        clear: both;
    }
` 

export const EvolutionImg = styled.img`
    width: 60px;
    height: 60px;
    float:left;
` 

export const Infos = styled.div`
    float:left;
`

export const Name = styled.div`
    font-size: 14px;
    font-weight: 600;
    margin-left: 5px;
`