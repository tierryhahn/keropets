import { IOngRequest, IOngLogin } from "../../interfaces/ongs";
import { IUserLogin, IUserRequest } from "../../interfaces/users";


export const mockedOng: IOngRequest = {
    name: "Abrigo do Bichos",
    email: "contato@abrigobichos.com",
    password: "12345",
    isOngAdm: true,
    address:  {
        district: "Rua Heleodo Pires de camargo",
        zipCode: "18150000",
        number: "67",
        city: "Piedade",
        state: "SP"
    }

}

export const mockedOngAdm: IOngRequest = {
    name: "Suipa",
    email: "contato@suipa.com",
    password: "12345",
    isOngAdm: true,
    address:  {
        district: "Rua Nilo Peçanha",
        zipCode: "23550255",
        number: "13444",
        city: "Centro",
        state: "RJ"
    }

}

export const mockedOngNoAdm: IOngRequest = {
    name: "Associação Protetora do Animais do Brasil",
    email: "contato@apab.com",
    password: "12345",
    isOngAdm: false,
    address:  {
        district: "Rua Epitácio Pessoa",
        zipCode: "19872009",
        number: "144",
        city: "Ajuda",
        state: "PE"
    }

}

export const mockedOngLogin : IOngLogin = {
    email: "contato@abrigobichos.com",
    password: "12345"
}
export const mockedAdminLogin : IOngLogin = {
    email: "contato@suipa.com",
    password: "12345"


export const mockedUser : IUserRequest = {
    name: "kalebe",
    email: "kalebe@mail.com",
    isAdm: true,
    password: "1234"
}

export const mockedUserLogin : IUserLogin = {
    email: "kalebe@mail.com",
    password: "1234"

}