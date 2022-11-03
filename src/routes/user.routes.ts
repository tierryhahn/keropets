import { Router } from "express";
import { updateUserController } from "../controllers/user/updateUser.controller";

import userLoginController from "../controllers/userLogin.controller";
import listUserController from "../services/listUsers.service";

const routes = Router();

export const userRoutes = () => {

    routes.post('/', userLoginController);
    routes.get('/', listUserController)
    routes.patch('', updateUserController)

    return routes;
};