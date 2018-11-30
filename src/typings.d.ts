import { Position } from './utils';

export type HandleEvent = (id: number) => () => void;

export interface IPhoto {
    dragging: boolean
    id: number
    onClick: HandleEvent,
    onDrop: HandleEvent,
    photo: string
    position: Position | undefined
}
