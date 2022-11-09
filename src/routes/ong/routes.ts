import { Router } from "express";

import ongCreateController from "../../controllers/ong/ongCreate.controller";
import ongDeleteController from "../../controllers/ong/ongDelete.controller";
import ongUpdateController from "../../controllers/ong/ongUpdate.controller";
import ongListController from "../../controllers/ong/ongList.controller";
import ongListByIdController from "../../controllers/ong/ongListById.controller";
import ensureOngAuthMiddleware from "../../middlewares/authOng.middleware";
import ongEnsureIsOngAdmMiddleware from "../../middlewares/ongEnsureISOngAdm.middleware";
import ongEnsureAuthUpdateMiddleware from "../../middlewares/ongEnsureAuthUpdate.middleware";


const ongRoutes = Router();
ongRoutes.post(
    "",
    ongCreateController
)
ongRoutes.patch("/:id", ensureOngAuthMiddleware,  ongEnsureIsOngAdmMiddleware,  ongUpdateController)
ongRoutes.delete("/:id", ensureOngAuthMiddleware,  ongEnsureIsOngAdmMiddleware, ongDeleteController)
ongRoutes.get(
    "",
    ensureOngAuthMiddleware, 
    ongListController
)
ongRoutes.get(
    "/:id",
    ensureOngAuthMiddleware, 
    ongListByIdController
)

export default ongRoutes;