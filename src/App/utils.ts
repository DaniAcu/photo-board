import { IPhoto } from '../typings';
import { Position } from '../utils';

export class Photo implements IPhoto {
    public dragging: boolean
    public id: number
    public onClick: any
    public onDrop: any
    public photo: string
    public position: Position | undefined

    public constructor (dragging: boolean, id: number, onClick: any, onDrop: any, photo: string, position?: Position) {
        this.dragging = dragging;
        this.id = id; 
        this.onClick = onClick;
        this.onDrop = onDrop;
        this.photo = photo;
        this.position = position;
    }

}