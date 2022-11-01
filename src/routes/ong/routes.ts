import { Router } from "express";

import ongCreateController from "../../controllers/ong/ongCreate.controller";
import ongListController from "../../controllers/ong/ongList.controller";


const ongRoutes = Router();
ongRoutes.post(
    "",
    ongCreateController
)
ongRoutes.get(
    "",
    ongListController
)

export default ongRoutes;