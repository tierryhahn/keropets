import { AppDataSource } from '../../data-source'
import { Donation } from '../../entities/donation.entity'
import { Ong } from '../../entities/ong.entity'
import { User } from '../../entities/user.entity'
import { AppError } from '../../errors/appError'
import { IDonationRequest } from '../../interfaces/donations'

const createDonationService = async ({ type, quantity, donatedBy, donatedTo }: IDonationRequest) => {
  const userRepository = AppDataSource.getRepository(User)
  const ongRepository = AppDataSource.getRepository(Ong)
  const donationRepository = AppDataSource.getRepository(Donation)

  const findUser = await userRepository.findOneBy({ id: donatedBy })
  const findOng = await ongRepository.findOneBy({ id: donatedTo })

  if (!findOng) {
    throw new AppError('Ong ID not found', 400)
  }

  if(!findUser){
    throw new AppError('User Id not found', 400)
  }

  const createDonation =  donationRepository.create({
    type,
    quantity,
    donatedBy,
    donatedTo
  })

  await donationRepository.save(createDonation)

  return createDonation
}

export default createDonationService
