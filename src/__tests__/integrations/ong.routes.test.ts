import  request  from "supertest";
import { DataSource } from "typeorm";
import app from "../../app";
import { AppDataSource } from "../../data-source";
import { IOngRequest, IAddressRequest } from "../../interfaces/ongs";
import { mockedOng } from "../mocks";


describe("Testing Ong routes", () => {
    let connection: DataSource;
    beforeAll(async () => {
        await AppDataSource.initialize().then(res => {
            connection = res
        }).catch(error => {
            console.log(error)
        })
    })

    afterAll(async() => {
        await connection.destroy()
    })

    test('POST /ong -  Must be able to create a ong', async () => {
       const response = await request(app).post('/ong').send(mockedOng)

       expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("email")
        expect(response.body).not.toHaveProperty("password")
        expect(response.body).toHaveProperty("isActive")
        expect(response.body).toHaveProperty("createdAt")
        expect(response.body).toHaveProperty("updatedAt")
        expect(response.body).toHaveProperty("address")
        expect(response.body.address).toHaveProperty("id")
        expect(response.body.address).toHaveProperty("district")
        expect(response.body.address).toHaveProperty("zipCode")
        expect(response.body.address).toHaveProperty("number")
        expect(response.body.address).toHaveProperty("city")
        expect(response.body.address).toHaveProperty("state")
        expect(response.status).toBe(201)
    })
})