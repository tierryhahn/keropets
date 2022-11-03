import { Router } from "express";
import sessionCreateController from "../../../controllers/ong/sessionCreate.controller";

const sessionRoutes = Router();

sessionRoutes.post("/login", sessionCreateController)

export default sessionRoutes;