import { AppDataSource } from '../../data-source'
import { Pets } from '../../entities/pets.entity'

const listPetsService = async () => {
  const petRepository = AppDataSource.getRepository(Pets)
  const pets = await petRepository.find()

  return pets
}

export default listPetsService
