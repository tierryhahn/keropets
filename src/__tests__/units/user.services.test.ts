import { AppDataSource } from '../../data-source'
import { DataSource } from 'typeorm'
import createUserService from '../../services/user/createUser.service'
import { IUserRequest } from '../../interfaces/users'

describe('Tests for Service User', () => {

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

  it('Must be able to create a user', async () => {
    const userData: IUserRequest = {
      email: 'rafael@kenzie.com',
      isAdm: true,
      name: 'Rafael',
      password: '1234'
    }

    const result = await createUserService(userData)

    expect(result).toHaveProperty('id')
    expect(result).toHaveProperty('createdAt')
    expect(result).toHaveProperty('updatedAt')
    expect(result).toHaveProperty('isActive')
    expect(result.password).not.toEqual(userData.password)

  })
})