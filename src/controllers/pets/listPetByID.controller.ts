import { Request, Response } from 'express'
import listPetByIDService from '../../services/pets/listpetByID.service'
import { AppError, handleError } from '../../errors/appError'

const listPetByIDController = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const pet = await listPetByIDService(id)

        return res.json(pet)

    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, res);
          }
    }
  }

export default listPetByIDController