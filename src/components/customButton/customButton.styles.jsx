import styled from 'styled-components';

export const Button = styled.button`
    border: none;
    background: #000;
    color: #fff;
    padding: 10px 15px;
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    float: right;
    margin-right: 35px;
    margin-top: 20px;

    display: ${props => props.show === false ? 'none' : 'block'};
    
    &:hover{
        background: blue;
        cursor: pointer;
    }
`