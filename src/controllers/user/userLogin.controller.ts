import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { IUserLogin } from "../../interfaces/users";
import userLogonService from "../../services/user/userLogin.service";

const userLoginController = async (req: Request, resp: Response) => {
  try {
    const { email, password }: IUserLogin = req.body;
    const token = await userLogonService({ email, password });

    return resp.status(200).json({ token });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, resp);
    }
  }
};

export default userLoginController;
