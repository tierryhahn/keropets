import { Request, Response } from 'express'
import { IPetsAdopt, IPetsUpdate } from '../../interfaces/pets'
import adoptPetService from '../../services/pets/adoptPet.service'
import updatePetService from '../../services/pets/updatePet.service'

const adoptPetController = async (req: Request, res: Response) => {
  const ownerId: IPetsAdopt = req.body
  const petId: string = req.params.id
  const adoptPet = await adoptPetService(ownerId, petId)

  return res.json(adoptPet)
}

export default adoptPetController