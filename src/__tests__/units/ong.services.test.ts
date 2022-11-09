import ongCreateService from "../../services/ong/ongCreate.service";
import { IOngRequest } from "../../interfaces/ongs";
import { Address } from "../../entities/adress_entity";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";

describe('Test for Ong services', () => {
    
    let connection: DataSource

    beforeAll(async() => {
        await AppDataSource.initialize().then( res => {
            connection = res
        }).catch(error => {
            console.log(error)
        });
    })

    afterAll(async() => {
        await connection.destroy()

    })

    test('Should be able to create a ong', () =>{
        const ongData: IOngRequest = {
            name: "Abrigo do Bichos",
            email: "contato@abrigobichos.com",
            password: "12345",
            isOngAdm: true,
            address:  {
                district: "Av Rui Barbosa",
                zipCode: "34561234",
                number: "69",
                city: "Morumbi",
                state: "SP"
            },
        
        }
    })
})

