import { Router } from "express";

import petCreatecontroller from "../controllers/pets/petCreate.controller";
import listPetsController from "../controllers/pets/listPets.controller";
import updatePetController from "../controllers/pets/updatePet.controller";
import deletePetController from "../controllers/pets/deletePet.controller";
import listPetByIDController from "../controllers/pets/listPetByID.controller";

const petRoutes = Router();

petRoutes.post("", petCreatecontroller);
petRoutes.get("", listPetsController);
petRoutes.get("/:id", listPetByIDController)
petRoutes.patch("/:id", updatePetController);
petRoutes.delete("/:id", deletePetController);

export default petRoutes;
