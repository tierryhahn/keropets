import { Router } from "express";
import { createUserController } from "../controllers/user/createUsers.controller";
import softDeleteUserController from "../controllers/user/deleteUsers.controller";
import { updateUserController } from "../controllers/user/updateUser.controller";

import userLoginController from "../controllers/user/userLogin.controller";
import listUserController from "../services/user/listUsers.service";
import listUserByIDController from "../controllers/user/listUserByID.controller";

const useroutes = Router();

useroutes.post("", createUserController)
useroutes.post("/login", userLoginController);
useroutes.get("", listUserController);
useroutes.patch("/:id", updateUserController);
useroutes.delete("/:id", softDeleteUserController)

export default useroutes

