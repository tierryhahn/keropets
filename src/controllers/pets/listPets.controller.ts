import { Request, Response } from 'express'
import listPetsService from '../../services/pets/listPets.service'

const listPetsController = async (req: Request, res: Response) => {
  const pets = await listPetsService()

  return res.json(pets)
}

export default listPetsController
