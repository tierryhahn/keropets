import { AppDataSource } from '../../data-source'
import { Donation } from '../../entities/donation.entity'
import { Ong } from '../../entities/ong.entity'
import { User } from '../../entities/user.entity'
import { AppError } from '../../errors/appError'
import { IDonationRequest } from '../../interfaces/donations'

const createDonationService = async ({ userId, ongId, type, quantity }: IDonationRequest) => {
  const userRepository = AppDataSource.getRepository(User)
  const ongRepository = AppDataSource.getRepository(Ong)
  const donationRepository = AppDataSource.getRepository(Donation)

  const findUser = await userRepository.findOneBy({ id: userId })
  const findOng = await ongRepository.findOneBy({ id: ongId })

  if (!findOng) {
    throw new AppError('Ong ID not found', 400)
  }

  const createDonation = donationRepository.create({
    user: findUser!,
    ong: findOng,
    type,
    quantity
  })

  await donationRepository.save(createDonation)

  return createDonation
}

export default createDonationService
