import { Address } from '../../entities/adress_entity'
import { Pets } from '../../entities/pets.entity'

export interface IOng {
    name: string,
    email: string,
    isActive: boolean,
    password: string,
    createdAt: Date,
    updatedAt: Date,
    pets: Pets[],
    donations: string,
    adress: string

}

export interface IOngRequest {
    name: string,
    email: string,
    password: string,
    address: Address
}

export interface IOngUpdate {
    name?: string,
    email?: string,
    password?: string,
    adress?: Address
}

export interface IOngLogin {
    email: string,
    password: string
}