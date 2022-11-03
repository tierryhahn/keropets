import { Router } from 'express'

import listPetsController from '../controllers/pets/listPets.controller'

const petRoutes = Router()

petRoutes.get('', listPetsController)

export default petRoutes
