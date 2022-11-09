import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const listUserByIDService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const user = users.find(elem => elem.id === id)

  if(!user){
    throw new AppError("user not found", 404)
  }

  return user;
};

export default listUserByIDService;