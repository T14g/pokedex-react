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
    width: 100%;
    max-width: 200px;

    display: ${props => props.show === false ? 'none' : 'block'};

    &:active{
        outline:none;
    }
    
    &:hover{
        background: blue;
        cursor: pointer;
    }

    @media(max-width: 800px){
        float: none;
        max-width: 265px;
        margin: 10px auto;
    }
`