import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import listUserByIDService from "../../services/user/listUserByID.service";

const listUserByIDController = async (req: Request, resp: Response) => {
  try {
    const {id} = req.params 

    const user = await listUserByIDService(id);
    
    return resp.json(user);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, resp);
    }
  }
};

export default listUserByIDController;