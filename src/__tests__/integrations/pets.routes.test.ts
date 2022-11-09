import request from 'supertest'
import app from '../../app'
import { DataSource } from 'typeorm'
import { AppDataSource } from '../../data-source'


describe('Testing pet routes', () => {
  let connection: DataSource

  beforeAll(async () => {
    await AppDataSource.initialize().then(res => {
      connection = res
    }).catch(error => {
      console.log(error)
    })
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('GET /pet -> Must be able to list all pets', async () => {

    const result = await request(app).get('/pets')

    expect(result.status).toBe(200)

  })
})
