import { Router } from "express";

import petCreatecontroller from "../../controllers/pet/petCreate.controller";



const petRoutes = Router();

petRoutes.post(
    "",
    petCreatecontroller
)

export default petRoutes