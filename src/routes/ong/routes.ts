import { Router } from "express";
import ongCreateController from "../../controllers/ong/ongCreate.controller";
import ongDeleteController from "../../controllers/ong/ongDelete.controller";
import ongUpdateController from "../../controllers/ong/ongUpdate.controller";


const ongRoutes = Router();
ongRoutes.post(
    "",
    ongCreateController
)
ongRoutes.patch("/:id", ongUpdateController)
ongRoutes.delete("/:id", ongDeleteController)

export default ongRoutes;