import { AppDataSource } from "../../../data-source";
import { Ong } from "../../../entities/ong.entity";
import { compare } from "bcryptjs";
import { AppError } from "../../../errors/appError";
import jwt from "jsonwebtoken";
import { IOngLogin } from "../../../interfaces/ongs";

const sessionCreateService = async({email, password}: IOngLogin): Promise<string> => {
    const ongRepository = AppDataSource.getRepository(Ong);

  const ongs = await ongRepository.find();

  const account = ongs.find((ong) => ong.email === email);

  if (!account) {
    throw new AppError("Invalid email or password", 401);
  }

  const passwordMattch = await compare(password, account.password);

  if (!password) {
    throw new AppError("Invalid email or password", 401);
  }

  const token = jwt.sign(
    {
      id: account.id,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: account.id,
    }
  );

  return token;
};

export default sessionCreateService;
