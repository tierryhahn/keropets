import { Request, Response } from 'express'
import deletePetService from '../../services/pets/deletePet.service'

const deletePetController = async (req: Request, res: Response) => {
  const { id } = req.params
  await deletePetService(id)

  return res.status(204).send()
}

export default deletePetController
