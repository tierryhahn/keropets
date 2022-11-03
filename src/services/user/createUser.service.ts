import { hash } from 'bcryptjs'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entity'
import { AppError } from '../../errors/appError'
import {IUserRequest} from '../../interfaces/users'
const createUserService = async ({name, email, isAdm, password}: IUserRequest): Promise<User> =>{
    
    const userRepository = AppDataSource.getRepository(User)

    const userFind = await userRepository.findOneBy({
        email
    })

    if(userFind){
        throw new AppError('Email already used')
    }

    if(!password){
        throw new AppError('Password is missing')
    }

    const hashPassword = await hash(password, 10)

    const user = userRepository.create({
        name, 
        email,
        isAdm,
        password: hashPassword,
        isActive: true
    })
    await userRepository.save(user)

    return user
}
export default createUserService