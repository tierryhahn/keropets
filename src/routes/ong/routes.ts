import { Router } from "express";
import ongCreateController from "../../controllers/ong/ongCreate.controller";
import ongUpdateController from "../../controllers/ong/ongUpdate.controller";


const ongRoutes = Router();
ongRoutes.post(
    "",
    ongCreateController
)
ongRoutes.patch("/:id", ongUpdateController)

export default ongRoutes;