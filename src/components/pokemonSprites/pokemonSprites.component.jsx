import React from 'react';
import {
    SpritesContainer,
    MiniSprite,
    BigSprite,
    BigContainer,
    MiniContainer
} from './pokemonSprites.styles';

export const PokemonSprites = ({ sprites }) => {

    const frontDefault = sprites.front_default;
    const validSprites = Object.values(sprites).filter(s => s !== null && typeof (s) === 'string');

    return (
        <SpritesContainer>

            <BigContainer>
                <BigSprite src={frontDefault} />
            </BigContainer>

            <MiniContainer>
                {
                    validSprites.map((sprite, index) => {
                        return <MiniSprite key={index} src={sprite} />
                    })
                }
            </MiniContainer>

        </SpritesContainer>
    );
}

