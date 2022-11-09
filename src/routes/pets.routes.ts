import { Router } from "express";

import listPetsController from '../controllers/pets/listPets.controller'
import updatePetController from '../controllers/pets/updatePet.controller'
import deletePetController from '../controllers/pets/deletePet.controller'
import adoptPetController from '../controllers/pets/adoptPet.controller';
import petCreatecontroller from "../controllers/pets/petCreate.controller";

const petRoutes = Router();

petRoutes.post("",petCreatecontroller)
petRoutes.get('', listPetsController)
petRoutes.patch('/:id', updatePetController)
petRoutes.delete('/:id', deletePetController)
petRoutes.patch("/adopt/:id", adoptPetController)

export default petRoutes;
