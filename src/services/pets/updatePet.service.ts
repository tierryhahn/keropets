import { AppDataSource } from '../../data-source'
import { Pets } from '../../entities/pets.entity'
import { AppError } from '../../errors/appError'
import { IPetsUpdate } from '../../interfaces/pets'

const updatePetService = async ({ name, species, breed, age }: IPetsUpdate, id: string) => {
  const petRepository = AppDataSource.getRepository(Pets)
  const findPet = await petRepository.findOneBy({ id })

  if (!findPet) {
    throw new AppError('Pet not found', 404)
  }

  await petRepository.update(
    id,
    {
      name: name ? name : findPet.name,
      species: species ? species : findPet.species,
      breed: breed ? breed : findPet.breed,
      age: age ? age : findPet.age
    }
  )

  const pet = await petRepository.findOneBy({ id })

  return pet!
}

export default updatePetService
