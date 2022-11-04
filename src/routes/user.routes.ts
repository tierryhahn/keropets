import { Router } from "express";
import { createUserController } from "../controllers/user/createUsers.controller";
import { updateUserController } from "../controllers/user/updateUser.controller";

import userLoginController from "../controllers/userLogin.controller";
import listUserController from "../services/user/listUsers.service";

const userRoutes = Router();

  userRoutes.post("/", createUserController)
  userRoutes.post("/", userLoginController);
  userRoutes.get("/", listUserController);
  userRoutes.patch("", updateUserController);

  export default userRoutes
