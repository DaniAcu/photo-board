import { Position } from '../utils';
import { Photo } from './utils';

export { HandleEvent } from '../typings';

export type GetPositionRandom = (x: number, y:number) => Position;

export interface IHits {
    id: number
    webformatURL: string
}

export interface IResponse {
    data: IResponseData
}

export interface IResponseData {
    hits: IHits[]
}

export interface IState {
    photos: Photo[]
}
