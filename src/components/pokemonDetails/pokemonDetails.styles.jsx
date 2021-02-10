import styled from 'styled-components';

export const DetailsContainer = styled.div`
    background: #fff;
    min-height: 400px;
    padding: 30px 10px;

    &::after{
        display: table;
        content: "";
        clear: both;
    }
` 