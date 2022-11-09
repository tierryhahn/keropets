import { IOngRequest, IOngLogin } from "../../interfaces/ongs";


export const mockedOng: IOngRequest = {
    name: "Abrigo do Bichos",
    email: "contato@abrigobichos.com",
    password: "12345",
    address:  {
        district: "Rua Heleodo Pires de camargo",
        zipCode: "18150000",
        number: "67",
        city: "Piedade",
        state: "SP"
    }

}

export const mockedOng2: IOngRequest = {
    name: "Suipa",
    email: "contato@suipa.com",
    password: "12345",
    address:  {
        district: "Rua Nilo Peçanha",
        zipCode: "23550255",
        number: "13444",
        city: "Centro",
        state: "RJ"
    }

}

export const mockedOngLogin : IOngLogin = {
    email: "contato@abrigobichos.com",
    password: "12345"
}