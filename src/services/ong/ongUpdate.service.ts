import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Ong } from "../../entities/ong.entity";

const ongUpdateService = async (
  { name, email, password }: IOngUpdate,
  id: string
) => {
  const ongRepository = AppDataSource.getRepository(Ong);

  const findOng = await ongRepository.findOneBy({
    id,
  });

  if (!findOng) {
    throw new AppError("Ong not found", 404);
  }

  await ongRepository.update(id, {
    name: name ? name : findOng!.name,
    email: email ? email : findOng!.email,
    password: password ? await hash(password, 10) : findOng!.password,
  });

  const ong = await ongRepository.findOneBy({
    id,
  });

  return ong!;
};

export default ongUpdateService;
