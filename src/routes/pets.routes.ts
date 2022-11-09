import { Router } from "express";

<<<<<<< HEAD
import petCreatecontroller from "../controllers/pet/petCreate.controller";
import listPetsController from '../controllers/pets/listPets.controller'
import updatePetController from '../controllers/pets/updatePet.controller'
import deletePetController from '../controllers/pets/deletePet.controller'
import adoptPetController from '../controllers/pets/adoptPet.controller';
=======
import petCreatecontroller from "../controllers/pets/petCreate.controller";
import listPetsController from "../controllers/pets/listPets.controller";
import updatePetController from "../controllers/pets/updatePet.controller";
import deletePetController from "../controllers/pets/deletePet.controller";
import listPetByIDController from "../controllers/pets/listPetByID.controller";
>>>>>>> b89483b17c75ecfd1bce062e450084ba556e50cf

const petRoutes = Router();

<<<<<<< HEAD
petRoutes.post("",petCreatecontroller)
petRoutes.get('', listPetsController)
petRoutes.patch('/:id', updatePetController)
petRoutes.delete('/:id', deletePetController)
petRoutes.patch("/adopt/:id", adoptPetController)
=======
petRoutes.post("", petCreatecontroller);
petRoutes.get("", listPetsController);
petRoutes.get("/:id", listPetByIDController)
petRoutes.patch("/:id", updatePetController);
petRoutes.delete("/:id", deletePetController);
>>>>>>> b89483b17c75ecfd1bce062e450084ba556e50cf

export default petRoutes;
