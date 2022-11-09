export interface IPets {
    id: string,
    name: string,
    breed: string,
    age: string,
    isAvailable: boolean,
    ownerId: string
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
    isAvailable?: boolean,
    ownerId?: string
}

export interface IPetsAdopt {
    ownerId: string
}