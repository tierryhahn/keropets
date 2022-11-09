import  request  from "supertest";
import { DataSource } from "typeorm";
import app from "../../app";
import { AppDataSource } from "../../data-source";
import { Ong } from "../../entities/ong.entity";
import { IOngRequest, IAddressRequest, IOng } from "../../interfaces/ongs";
import { mockedAdminLogin, mockedOng, mockedOngAdm, mockedOngLogin, mockedOngNoAdm } from "../mocks";


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

    test("POST /login -  should be able to login a ong",async () => {
        const response = await request(app).post("/ong/login").send(mockedOngLogin);
        
        expect(response.body).toHaveProperty("token")
        expect(response.status).toBe(200)
     
    })
    test("GET /ong - Must be able to list ongs", async () => {
      //  await request(app).post('/ong').send(mockedOng)
        const ongLoginResponse = await request(app).post('/ong/login').send(mockedOngLogin)
        const response = await request(app).get('/ong').set('Authorization', `Bearer ${ongLoginResponse.body.token}`)
        expect(response.body).toHaveLength(1)
    })

    test("GET /ong/:id - Must be able to list one ong by its id", async () => {
        
        await request(app).post('/ong').send(mockedOng)
        const ongLoginResponse = await request(app).post('/ong/login').send(mockedOngLogin)
        const ongToBeRequested = await request(app).get(`/ong`).set('Authorization', `Bearer ${ongLoginResponse.body.token}`)
        
        const responsePassword = await request(app).get(`/ong/${ongToBeRequested.body[0].id}`).set('Authorization', `Bearer ${ongLoginResponse.body.token}`)
        const response = { ...responsePassword.body}
        
        
        
        expect(response).toHaveProperty("id")
        expect(response).toHaveProperty("email")
        expect(response).not.toHaveProperty("password")
        expect(response).toHaveProperty("isActive")
        expect(response).toHaveProperty("createdAt")
        expect(response).toHaveProperty("updatedAt")
        expect(response).toHaveProperty("address")
        expect(response.address).toHaveProperty("id")
        expect(response.address).toHaveProperty("district")
        expect(response.address).toHaveProperty("zipCode")
        expect(response.address).toHaveProperty("number")
        expect(response.address).toHaveProperty("city")
        expect(response.address).toHaveProperty("state")

        
    })

    test("PATCH /ong/:id -  should be able to update ong", async () => {
        const newValues = {
            name: "Novo Nome da Ong",
            email: "contato@novaong.com"
        }

        const ongLogin = await request(app).post("/ong/login").send(mockedOngLogin);
        const token = `Bearer ${ongLogin.body.token}`

        const ongTobeUpdatedRequest= await request(app).get("/ong").set("Authorization", token)
        const ongUpdatedId = ongTobeUpdatedRequest.body[0].id

        const response = await request(app).patch(`/ong/${ongUpdatedId}`).set("Authorization", token).send(newValues)
       
       // const ongUpdated = await request(app).get("ong").set("Authorization", token);



        expect(response.status).toBe(200);
        expect(response.body.name).toEqual("Novo Nome da Ong")
        expect(response.body).not.toHaveProperty("password")

    })

    test("DELETE /ong/:id - Must be able to soft delete a ong", async () => {
        await request(app).post("/ong").send(mockedOngNoAdm);
        await request(app).post("/ong").send(mockedOngAdm);
        const adminLoginResponse = await request(app).post("/ong/login").send(mockedAdminLogin);
        const ongTobeDeleted = await request(app).get("/ong").set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
        
        const ongDel: Array<Ong> = ongTobeDeleted.body
        const ongDelId = ongDel.filter(ong => ong.isOngAdm === false)[0].id;
        const response = await request(app).delete(`/ong/${ongDelId}`).set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
        const findUser = await request(app).get("/ong").set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
        const ongDel2: Array<Ong> = findUser.body
        
        const findOgDelId: any =  ongDel2.find(ong => ong.id === ongDelId)
        console.log(findOgDelId)

        expect(response.status).toBe(204)
        expect(findOgDelId.isActive).toBe(false)
        
    })


})