import { Request, Response } from 'express'
import { IDonationRequest } from '../../interfaces/donations'
import createDonationService from '../../services/donations/createDonation.service'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const createDonationController = async (req: Request, res: Response) => {

  const donation: IDonationRequest = { ...req.body }

  const createdDonation = await createDonationService(donation)

  return res.status(201).json(createdDonation)
}

export default createDonationController
