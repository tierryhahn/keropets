import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { User } from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const userLoginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const account = users.find((user) => user.email === email);
  if (!account) {
    throw new AppError("Wrong email/password", 403);
  }

  if (!account.isActive) {
    throw new AppError("Invalid User", 401);
  }

  if (!bcrypt.compareSync(password, account.password)) {
    throw new AppError("Wrong email/password", 403);
  }

  const token = jwt.sign(
    {
      isAdm: account.isAdm,
    },
    process.env.SECRET_KEY as string,
    {
      subject: account.id,
      expiresIn: "24h",
    }
  );

  return token;
};

export default userLoginService;
