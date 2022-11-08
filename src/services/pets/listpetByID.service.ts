import { AppDataSource } from '../../data-source'
import { Pets } from '../../entities/pets.entity'
import { AppError } from '../../errors/appError'

const listPetByIDService = async (id: string) => {
  const petRepository = AppDataSource.getRepository(Pets)
  const pets = await petRepository.find()

  const pet = pets.find(elem => elem.id === id)

  if(!pet){
    throw new AppError('Pet not found', 404)
  }

  return pet
}

export default listPetByIDService