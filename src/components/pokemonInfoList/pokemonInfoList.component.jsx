import React from 'react';
import { Container, InfoContainer, Title, Info } from './pokemonInfoList.styles';

export const PokemonInfoList = ({ title, color, data }) => {

    let infoArray = [];
    data.map(info => infoArray.push(info));

    return (
        <Container>
            { infoArray.length > 0 ? <Title>{title}</Title> : null}

            <InfoContainer>
                {
                    infoArray.map(info =>
                        <Info color={color} key={info}>{info}</Info>
                    )
                }
            </InfoContainer>

        </Container>
    );

}

