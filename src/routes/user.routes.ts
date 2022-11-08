import { Router } from "express";
import { createUserController } from "../controllers/user/createUsers.controller";
import { updateUserController } from "../controllers/user/updateUser.controller";

import userLoginController from "../controllers/user/userLogin.controller";
import listUserController from "../services/user/listUsers.service";
import listUserByIDController from "../controllers/user/listUserByID.controller";

const userRoutes = Router();

userRoutes.post("/", createUserController);
userRoutes.post("/", userLoginController);
userRoutes.get("/", listUserController);
userRoutes.get("/:id", listUserByIDController)
userRoutes.patch("", updateUserController);

export default userRoutes;
