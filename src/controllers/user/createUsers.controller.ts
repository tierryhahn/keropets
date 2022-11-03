import { IUserRequest } from "../../interfaces/users"
import { Request, Response } from 'express'
import createUserService from "../../services/user/createUser.service"
import { instanceToPlain } from "class-transformer"

export const createUserController = async (req: Request, res: Response) => {

    const user: IUserRequest = req.body

    const createUser = await createUserService(user)

    return res.status(201).json(instanceToPlain(createUser))
}