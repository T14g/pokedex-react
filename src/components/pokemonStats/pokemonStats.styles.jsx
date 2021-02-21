import styled from 'styled-components';

export const Container = styled.div`
    margin-left: 5px;
`

export const Title = styled.h3`
    margin: 0 0 5px;
`

export const PercentOutter = styled.div`
    background: #c6c6c6;
    border-radius: 16px;
    margin-bottom: 5px;
`

export const  PercentInner = styled.div`
    width : ${props => props.percent}%;
    max-width 100%;
    background: orange;
    text-align: center;
    border-radius: 16px;
    font-size: 12px;
    font-weight: 500;
    padding-top:5px;
    padding-bottom: 5px;
    color: #fff;
`