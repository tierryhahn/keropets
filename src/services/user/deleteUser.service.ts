import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { User } from "../../entities/user.entity";

const softDeleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const user = users.find((user) => user.id === id);

  if (!user) {
    throw new AppError("User not found!", 404);
  }

  if (!user?.isActive) {
    throw new AppError("User inative!", 404);
  } else {
    const newState = false;
    await userRepository.update(user.id, { isActive: newState });
  }

  return true;
};

export default softDeleteUserService;