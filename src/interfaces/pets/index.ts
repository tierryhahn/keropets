export interface IPets {
    id: string,
    name: string,
    breed: string,
    age: number,
    adopted: boolean,
    userId: string,
    ongId: string
}

export interface IPetsUpdate {
    name: string,
    species: string,
    breed: string,
    age: number, 
}

export interface IPetsRequest {
    name: string,
    species?: string,
    breed?:string,
    age: number,
    adopted?: string,
    userId?: string,
    ongId: string
}