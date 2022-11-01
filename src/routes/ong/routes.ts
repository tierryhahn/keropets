import { Router } from "express";
import ongCreateController from "../../controllers/ong/ongCreate.controller";


const ongRoutes = Router();
ongRoutes.post(
    "",
    ongCreateController
)

export default ongRoutes;