import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import softDeleteUserService from "../../services/user/deleteUser.service";

const softDeleteUserController = async (req: Request, resp: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new AppError("Invalid user!", 404);
    }

    const _ = await softDeleteUserService(id);

    return resp.status(204).json({ message: "User deleted successfully!" });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, resp);
    }
  }
};

export default softDeleteUserController;