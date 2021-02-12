import styled from 'styled-components';

export const Container = styled.div`
    margin: 15px 0;
`

export const Title = styled.h3`
    margin: 0 0 5px;
    padding-left: 5px;
`

export const InfoContainer = styled.div`
    margin-left:5px;
    margin-bottom: 10px;
    max-height: 150px;
    overflow: auto;

    &::after{
        display:table;
        content:"";
        clear: both;
    }
` 

export const Info = styled.span`
    background: ${props => props.color };
    color: #fff;
    font-size:12px;
    padding: 5px 10px;
    float:left;
    margin-bottom: 5px;
    display:block;

    &:not(:last-child){
        margin-right: 10px;
    }
`