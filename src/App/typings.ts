export interface IPhoto {
    id: number
    webformatURL: string
}

export interface IResponse {
    data: IResponseData
}

export interface IResponseData {
    hits: IPhoto[]
}

export interface IState {
    photos: any[]
}
