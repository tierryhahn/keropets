import { AppDataSource } from "../../data-source";
import { Ong } from "../../entities/ong.entity";
import { Pets } from "../../entities/pets.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";



const petCreateService = async ({name, species, breed, age, ongId}: IPetsRequest) => {

    const petRepository = AppDataSource.getRepository(Pets);
    const ongRepository = AppDataSource.getRepository(Ong);
    const userRepository = AppDataSource.getRepository(User);

    const ongs = await ongRepository.findOneBy({id: ongId});

    

    if(!ongs){
        throw new AppError("Invalid Ong Id", 404)
    }
    
  const pets = await petRepository.find();

  const petAlreadyExists = pets.find((pet) => 
    pet.name === name &&
    pet.species === species &&
    pet.breed === breed &&
    pet.age === age && 
    pet.ong === ongId 
  )

  if(petAlreadyExists) {
    throw new AppError("Pet is already registred", 400)
  }

  const createdPet = petRepository.create({
    name,
    species,
    breed,
    age,
    ong: ongs,

  })
  await petRepository.save(createdPet);

  return createdPet
}

export default petCreateService;