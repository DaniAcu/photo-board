import * as React from 'react';
import Draggable from 'react-draggable';
import { Frame, Photo } from './styled';
import { IProps } from './typings';

const getPositionRandom = () => {
    const { clientHeight , clientWidth } = document.body;
    const height = Math.floor((Math.random() * clientHeight));
    const width = Math.floor((Math.random() * clientWidth));

    return {
        x: width,
        y: height 
    };
};

export const Card: React.SFC<IProps> = ({ image }: IProps) => (
    <Draggable
        defaultPosition={getPositionRandom()}>
        <Frame>
            <Photo image={ image } />
        </Frame>
    </Draggable>
)