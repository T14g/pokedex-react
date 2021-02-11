import styled from 'styled-components';

export const List = styled.div`
    z-index: 100;

    &::after{
        display: table;
        content: "";
        clear: both;
    }
` 