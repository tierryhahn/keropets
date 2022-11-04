import { Router } from 'express'

import listPetsController from '../controllers/pets/listPets.controller'
import updatePetController from '../controllers/pets/updatePet.controller'
import deletePetController from '../controllers/pets/deletePet.controller'

const petsRoutes = Router()

petsRoutes.get('', listPetsController)
petsRoutes.patch('/:id', updatePetController)
petsRoutes.delete('/:id', deletePetController)

export default petsRoutes
