import  request  from "supertest";
import { DataSource } from "typeorm";
import app from "../../app";
import { AppDataSource } from "../../data-source";
import { mockedUser, mockedUserLogin } from "../mocks";

describe("Testing User routes", () => {
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

    test('POST /ong -  Must be able to create a user', async () => {
        const response = await request(app).post('/user').send(mockedUser)
 
         expect(response.body).toHaveProperty("id")
         expect(response.body).toHaveProperty("email")
         expect(response.body).not.toHaveProperty("password")
         expect(response.body).toHaveProperty("isActive")
         expect(response.body).toHaveProperty("createdAt")
         expect(response.body).toHaveProperty("updatedAt")
         expect(response.status).toBe(201)
     })

    test("POST /login -  should be able to login a user",async () => {
        const response = await request(app).post("/user/login").send(mockedUserLogin);
        console.log(response.body)
        
        expect(response.body).toHaveProperty("token")
        expect(response.status).toBe(200)
     
    })
}) 