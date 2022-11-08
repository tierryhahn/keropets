import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { Address } from "../../entities/adress_entity";
import { Ong } from "../../entities/ong.entity";
import { AppError } from "../../errors/appError";
import { IOngRequest } from "../../interfaces/ongs";

const ongCreateService = async ({
  name,
  email,
  password,
  address: { district, zipCode, number, city, state },
}: IOngRequest) => {
  const ongRepository = AppDataSource.getRepository(Ong);
  const addressRepository = AppDataSource.getRepository(Address);

  const ongs = await ongRepository.find();

  const emailAlreadyExists = ongs.find((ong) => ong.email === email);

  if (emailAlreadyExists) {
    throw new AppError("Email already exists");
  }

  if (!password) {
    throw new AppError("Password is missing");
  }

  const addresses = await addressRepository.find();

  const addressAlreadyExists = addresses.find(
    (address) =>
      address.district === district &&
      address.zipCode === zipCode &&
      address.number === number &&
      address.city === city &&
      address.state === state
  );

  if (addressAlreadyExists) {
    throw new AppError("Address already registred");
  }

  if (zipCode.length > 8 || state.length > 2) {
  }
  if (zipCode.length > 8 || state.length > 2) {
    throw new AppError("Limit of this field has been exceeded", 400);
  }

  const createdAddress = addressRepository.create({
    district,
    zipCode,
    number,
    city,
    state,
  });

  await addressRepository.save(createdAddress);

  const hashedPassword = await hash(password, 10);
  

  const createdOng = ongRepository.create({
    name,
    email,
    password: hashedPassword,

    address: { ...createdAddress },
  });

  await ongRepository.save(createdOng);

  

  return createdOng;
};

export default ongCreateService;
