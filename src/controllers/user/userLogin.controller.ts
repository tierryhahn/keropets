import { Request, Response } from "express";
<<<<<<< HEAD:src/controllers/userLogin.controller.ts
import { AppError, handleError } from "../errors/appError";
import { IUserLogin } from "../interfaces/users";
import userLoginService from "../services/user/userLogin.service";
=======
import { AppError, handleError } from "../../errors/appError";
import { IUserLogin } from "../../interfaces/users";
import userLogonService from "../../services/user/userLogin.service";
>>>>>>> b89483b17c75ecfd1bce062e450084ba556e50cf:src/controllers/user/userLogin.controller.ts

const userLoginController = async (req: Request, resp: Response) => {
  try {
    const { email, password }: IUserLogin = req.body;
    const token = await userLoginService({ email, password });

    return resp.status(200).json({ token });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, resp);
    }
  }
};

export default userLoginController;
