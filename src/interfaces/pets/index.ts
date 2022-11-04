export interface IPets {
    id: string,
    name: string,
    breed: string,
    age: string,
    adopted: boolean,
    userId: string,
    ongId: string
}

export interface IPetsUpdate {
    name: string,
    species: string,
    breed: string,
    age: string, 
}

export interface IPetsRequest {
    name: string,
    species?: string,
    breed?:string,
    age: string,
    adopted?: string,
    userId?: string,
    ongId: string
}