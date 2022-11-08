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
    address: IAddressRequest
}

export interface IOngUpdate {
    name?: string,
    email?: string,
    password?: string,
    address?: IAddressRequest
}

export interface IOngLogin {
    email: string,
    password: string
}

