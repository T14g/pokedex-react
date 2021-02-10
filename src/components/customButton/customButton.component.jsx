import React from 'react';
import { Button } from './customButton.styles';

export const CustomButton = ({ name, show = true, onClickFn }) => (
    <Button show={show} onClick={() => onClickFn()}>{name}</Button>
);


