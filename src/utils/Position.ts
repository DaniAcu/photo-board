import { ControlPosition } from 'react-draggable';

export default class Position implements ControlPosition {
    public x: number;
    public y: number;
    constructor (x: number, y: number){
        this.x = x;
        this.y = y;        
    }
}