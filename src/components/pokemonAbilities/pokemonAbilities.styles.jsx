import styled from 'styled-components';

export const Container = styled.div`

`

export const Title = styled.h3`
    margin: 0 0 15px;
`

export const AbilitiesContainer = styled.div`
    max-width: 300px;
` 

export const Ability = styled.span`
    background: red;
    color: #fff;
    font-size:12px;
    padding: 5px 10px;

    &:not(:last-child){
        margin-right: 10px;
    }
`