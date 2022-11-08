import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import listUsersService from "../../controllers/user/listUsers.controller";
import { instanceToPlain } from "class-transformer";

const listUserController = async (req: Request, resp: Response) => {
  try {
    const users = await listUsersService();
    return resp.json(instanceToPlain(users));
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, resp);
    }
  }
};

export default listUserController;
