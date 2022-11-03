import { Request, Response } from 'express'
import { IPetsUpdate } from '../../interfaces/pets'
import updatePetService from '../../services/pets/updatePet.service'

const updatePetController = async (req: Request, res: Response) => {
  const pet: IPetsUpdate = req.body
  const id: string = req.params.id
  const updatedPet = await updatePetService(pet, id)

  return res.json(updatedPet)
}

export default updatePetController
