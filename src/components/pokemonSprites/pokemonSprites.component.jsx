import React from 'react';
import {
    SpritesContainer,
    MiniSprite,
    BigSprite,
    BigContainer,
    MiniContainer,
    UnknowPokemon
} from './pokemonSprites.styles';

export const PokemonSprites = ({ sprites }) => {

    const frontDefault = sprites.front_default;
    const validSprites = Object.values(sprites).filter(s => s !== null && typeof (s) === 'string');
    console.log(sprites);

    return (
        <SpritesContainer>

            <BigContainer>
                { frontDefault !== null ? <BigSprite src={frontDefault} /> 
                : <UnknowPokemon>?</UnknowPokemon>}
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

