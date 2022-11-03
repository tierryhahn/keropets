import { Request, Response } from 'express'
import { IDonationRequest } from '../../interfaces/donations'
import createDonationService from '../../services/donations/createDonation.service'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const createDonationController = async (req: Request, res: Response) => {
  let token = req.headers.authorization
  token = token!.split(' ')[1]

  let userId = ''

  jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
    userId = decoded.sub
  })

  const donation: IDonationRequest = { userId, ...req.body }

  const createdDonation = await createDonationService(donation)

  return res.status(201).json(createdDonation)
}

export default createDonationController
