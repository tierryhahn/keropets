import request from 'supertest'
import app from '../../app'
import { DataSource } from 'typeorm'
import { AppDataSource } from '../../data-source'


describe('Testando rotas de pets', () => {
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

  it('GET /pet -> Deve ser capaz de listar todos os pets', async () => {

    const result = await request(app).get('/pet')

    expect(result.status).toBe(200)

  })
})
