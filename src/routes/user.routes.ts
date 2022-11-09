import { Router } from "express";
import { createUserController } from "../controllers/user/createUsers.controller";
import { updateUserController } from "../controllers/user/updateUser.controller";

import userLoginController from "../controllers/userLogin.controller";
import listUserController from "../services/user/listUsers.service";

const useroutes = Router();

useroutes.post("", createUserController)
useroutes.post("/login", userLoginController);
useroutes.get("/", listUserController);
useroutes.patch("/:id", updateUserController);

export default useroutes

