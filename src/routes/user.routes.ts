import { Router } from "express";
import { createUserController } from "../controllers/user/createUsers.controller";
import softDeleteUserController from "../controllers/user/deleteUsers.controller";
import { updateUserController } from "../controllers/user/updateUser.controller";

import userLoginController from "../controllers/user/userLogin.controller";
import listUserController from "../services/user/listUsers.service";
import listUserByIDController from "../controllers/user/listUserByID.controller";

const useroutes = Router();

<<<<<<< HEAD
useroutes.post("", createUserController)
useroutes.post("/login", userLoginController);
useroutes.get("", listUserController);
useroutes.patch("/:id", updateUserController);
useroutes.delete("/:id", softDeleteUserController)

export default useroutes

=======
userRoutes.post("/", createUserController);
userRoutes.post("/", userLoginController);
userRoutes.get("/", listUserController);
userRoutes.get("/:id", listUserByIDController)
userRoutes.patch("", updateUserController);

export default userRoutes;
>>>>>>> b89483b17c75ecfd1bce062e450084ba556e50cf
