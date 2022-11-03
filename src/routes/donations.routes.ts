import { Router } from 'express'

import createDonationController from '../controllers/donations/createDonation.controller'

const donationRoutes = Router()

donationRoutes.post(''/*, ensureAuthMiddleware*/, createDonationController)

export default donationRoutes
