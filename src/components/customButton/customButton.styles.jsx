import styled from 'styled-components';

export const Button = styled.button`
    border: none;
    background: ${props => props.show ? '#A2E849' : '#730505'};
    color: ${props => props.show ? '#000' : '#5f0303'};
    border: ${props => props.show ? 'none' : '1px #000 solid'};
    padding: 10px 15px;
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    float: right;
    margin-right: 35px;
    margin-top: 45px;
    width: 100%;
    max-width: 200px;
    transition: 1s;
    border-radius: 75px;
    font-weight: 800;


    &:active{
        outline:none;
    }
    
    &:hover{
        ${props => props.show ? `
            background: #84b940;
            cursor: pointer;
        ` : ''}
    }

    @media(max-width: 800px){
        float: none;
        max-width: 265px;
        margin: 10px auto;
    }
`