import { Address } from '../../entities/adress_entity'
import { Pets } from '../../entities/pets.entity'

export interface IAddressRequest {
    district: string;
    zipCode: string;
    number?: string;
    city: string;
    state: string;
  }

export interface IOng {
    name: string,
    email: string,
    isActive: boolean,
    isOngAdm: boolean,
    isOng: boolean,
    password: string,
    createdAt: Date,
    updatedAt: Date,
    pets: Pets[],
    donations: string,
    address: IAddressRequest

}

export interface IOngRequest {
    name: string,
    email: string,
    password?: string,
    isOngAdm: boolean,
    address: IAddressRequest
}


export interface IOngUpdate {
    name?: string,
    email?: string,
    password?: string,
  
}



export interface IOngLogin {
    email: string,
    password: string
}

