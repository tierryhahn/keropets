import { Router } from 'express'

import updatePetController from '../controllers/pets/updatePet.controller'

const petRoutes = Router()

petRoutes.patch('/:id', updatePetController)

export default petRoutes