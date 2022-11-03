import { hash } from "bcryptjs"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"
import { IUserUpdate } from "../../interfaces/users"

const updateUserService = async({name, email, password, id: uuid, isActive, isAdm}: IUserUpdate, id: string): Promise<User | Array<string | number>> => {

    const userRepository = AppDataSource.getRepository(User)

    if(uuid != undefined|| isActive != undefined|| isAdm != undefined){
        throw new AppError('Field id, isAdm, isActive n cannot be changed', 401)
    }

    const userFind = await userRepository.findOneBy({
        id
    })
    if(!userFind){
        throw new AppError('User not found', 404)
    }

    await userRepository.update(
        id,
        {
            name: name ? name : userFind.name,
            email: email ? email : userFind.email,
            password: password ? await hash(password, 10) : userFind.password
        }
    )
    const user = await userRepository.findOneBy({
        id
    })

    return user!
}

export default updateUserService