import { IOngRequest, IOngLogin } from "../../interfaces/ongs";
import { IUserLogin, IUserRequest } from "../../interfaces/users";


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

export const mockedOngLogin : IOngLogin = {
    email: "contato@abrigobichos.com",
    password: "12345"
}

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