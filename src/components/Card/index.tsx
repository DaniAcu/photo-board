import * as React from 'react';
import Draggable from 'react-draggable';
import { IPhoto } from '../../typings';
import { Frame, Photo } from './styled';

export const Card: React.SFC<IPhoto> = ({ dragging, id, onClick, onDrop , position, photo }: IPhoto) => (
    <Draggable
        position={ position }
        onStart={ onClick(id) }
        onStop={ onDrop(id) }>
        <Frame dragging={ dragging }>
            <Photo photo={ photo } />
        </Frame>
    </Draggable>
)