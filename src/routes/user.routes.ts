import { Router } from "express";

import userLoginController from "../controllers/userLogin.controller";
import listUserController from "../services/listUsers.service";

const routes = Router();

export const userRoutes = () => {

    routes.post('/', userLoginController);
    routes.get('/', listUserController)

    return routes;
};