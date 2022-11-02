import { Router } from "express";

import ongCreateController from "../../controllers/ong/ongCreate.controller";
import ongUpdateController from "../../controllers/ong/ongUpdate.controller";
import ongListController from "../../controllers/ong/ongList.controller";

const ongRoutes = Router();
ongRoutes.post(
    "",
    ongCreateController
)

ongRoutes.patch("/:id", ongUpdateController)
ongRoutes.get(
    "",
    ongListController
)


export default ongRoutes;