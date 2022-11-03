import express from 'express'
import { appRoutes } from './routes'
import { errorMiddleware } from './middlewares/error.middleware'
import { Request, Response } from 'express'
import ongRoutes from './routes/ong/routes'
import sessionRoutes from './routes/ong/session/routes'
import petRoutes from './routes/pet/routes'
import petRoutes from './routes/pets.routes'
import donationRoutes from './routes/donations.routes'
    
const app = express()
    
app.use(express.json())
app.use("/ong", ongRoutes)
app.use("/ong", sessionRoutes)
app.use("/pet", petRoutes)
app.use('/pets', petRoutess)
app.use('/donations', donationRoutes)
    
appRoutes(app)
    
app.get('/', (req: Request, res: Response) => {
        
    res.status(200).json({
        message: "Hello World"
    })
})
    
app.use(errorMiddleware)
    
app.listen(3000)