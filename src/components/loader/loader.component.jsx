
import React from 'react';
import { LoaderContainer, LoaderOverlay } from './loader.styles';

export const Loader = ({ loading }) => (
    <LoaderOverlay loading={loading} ><LoaderContainer /></LoaderOverlay>
)
