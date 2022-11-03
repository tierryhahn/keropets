import { Router } from 'express'

import listPetsController from '../controllers/pets/listPets.controller'
import updatePetController from '../controllers/pets/updatePet.controller'

const petRoutes = Router()

petRoutes.get('', listPetsController)
petRoutes.patch('/:id', updatePetController)

export default petRoutes
