import { Request, Response } from 'express'
import { IUserUpdate } from '../../interfaces/users'
import updateUserService from '../../services/user/updateUser.service'



export const updateUserController = async (req: Request, res: Response) => {
  
    const user: IUserUpdate = req.body
    const id: string = req.params.id
    const updatedUser = await updateUserService(user, id)
    return res.status(200).json({
        message: "update user",
        user: updatedUser})
    
}