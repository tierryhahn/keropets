import { Router } from "express";
import { createUserController } from "../controllers/user/createUsers.controller";
import { updateUserController } from "../controllers/user/updateUser.controller";

import userLoginController from "../controllers/userLogin.controller";
import listUserController from "../services/user/listUsers.service";

const routes = Router();

export const userRoutes = () => {
  routes.post("", createUserController)
  routes.post("/", userLoginController);
  routes.get("/", listUserController);
  routes.patch("", updateUserController);

  return routes;
};
