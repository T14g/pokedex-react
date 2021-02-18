import React, { useEffect, useState } from 'react';
import {
    SpritesContainer,
    MiniSprite,
    BigSprite,
    BigContainer,
    MiniContainer,
    UnknowPokemon
} from './pokemonSprites.styles';

export const PokemonSprites = ({ sprites }) => {

    const [ compState, setCompState ] = useState({ bigImg: '', otherImgs : [] });

    useEffect(()=>{
        let validSprites = Object.values(sprites).filter(s => s !== null && typeof (s) === 'string');
        setCompState({bigImg: sprites.front_default, otherImgs : validSprites});
    },[sprites]);

    const { bigImg, otherImgs } = compState;

    const setBigImg = (e) =>{
        setCompState({ ...compState, bigImg: e.target.src});
    }

    return (
        <SpritesContainer>

            <BigContainer>
                {bigImg !== null ? <BigSprite src={bigImg} />
                    : <UnknowPokemon>?</UnknowPokemon>}
            </BigContainer>

            <MiniContainer>
                {
                    otherImgs.map((sprite, index) => {
                        return <MiniSprite onClick={(e) => setBigImg(e) } key={index} src={sprite} />
                    })
                }
            </MiniContainer>

        </SpritesContainer>
    );
}

