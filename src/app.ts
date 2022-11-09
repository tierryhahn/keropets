import "express-async-errors"
import express from 'express'
import { errorMiddleware } from './middlewares/error.middleware'
import { Request, Response } from 'express'
import ongRoutes from './routes/ong/routes'
import sessionRoutes from './routes/ong/session/routes'
import petRoutes from './routes/pets.routes'
import donationRoutes from './routes/donations.routes'
import userRoutes from "./routes/user.routes"
    
const app = express()
    
app.use(express.json())
app.use("/ong", ongRoutes)
app.use("/ong", sessionRoutes)
app.use("/pets", petRoutes)
app.use('/donations', donationRoutes)
app.use('/user', userRoutes)
    

    
app.use(errorMiddleware)
    
export default app