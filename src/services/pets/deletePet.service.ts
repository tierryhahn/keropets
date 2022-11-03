import { AppDataSource } from '../../data-source'
import { Pets } from '../../entities/pets.entity'
import { AppError } from '../../errors/appError'

const deletePetService = async (id: string) => {
  const petRepository = AppDataSource.getRepository(Pets)
  const pet = await petRepository.findOneBy({ id })

  if (!pet) {
    throw new AppError('Pet not found', 404)
  }

  await petRepository.delete(pet.id)

  return true
}

export default deletePetService
