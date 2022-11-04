import { Router } from "express";

import petCreatecontroller from "../../controllers/pet/petCreate.controller";
import listPetByIDController from "../../controllers/pets/listPetByID.controller";



const petRoutes = Router();

petRoutes.post(
    "",
    petCreatecontroller
)

petRoutes.get(
    '/:id',
    listPetByIDController
)

export default petRoutes