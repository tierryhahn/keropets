import { AppDataSource } from '../../data-source'
import { Pets } from '../../entities/pets.entity'
import { User } from '../../entities/user.entity'
import { AppError } from '../../errors/appError'
import { IPetsAdopt } from '../../interfaces/pets'

const adoptPetService = async ({ ownerId }: IPetsAdopt, id: string) => {
  const petRepository = AppDataSource.getRepository(Pets)
  const findPet = await petRepository.findOneBy({ id })
  const userRepository = AppDataSource.getRepository(User)

  const findUser = await userRepository.findOneBy({ id: ownerId })

  if(!findUser){
    throw new AppError('User Id not found', 404)
  }

  if (!findPet) {
    throw new AppError('Pet not found', 404)
  }

  await petRepository.update(
    id,
    {
     ownerId: ownerId
    }
  )

  const pet = await petRepository.findOneBy({ id })

  return pet!
}

export default adoptPetService
