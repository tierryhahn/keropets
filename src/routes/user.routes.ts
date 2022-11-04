import { Router } from "express";
import listUserByIDController from "../controllers/user/listUserByID.controller";
import { updateUserController } from "../controllers/user/updateUser.controller";

import userLoginController from "../controllers/userLogin.controller";
import listUserController from "../services/listUsers.service";

const routes = Router();

export const userRoutes = () => {

    routes.post('/', userLoginController);
    routes.get('/', listUserController)
    routes.patch('', updateUserController)
    routes.get('/:id', listUserByIDController)

    return routes;
};