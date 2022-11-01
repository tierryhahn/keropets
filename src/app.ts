import express from 'express'
import { appRoutes } from './routes'
import { errorMiddleware } from './middlewares/error.middleware'
import { Request, Response } from 'express'
import ongRoutes from './routes/ong/routes'
    
const app = express()
    
app.use(express.json())
app.use("/ong", ongRoutes)
    
appRoutes(app)
    
app.get('/', (req: Request, res: Response) => {
        
    res.status(200).json({
        message: "Hello World"
    })
})
    
app.use(errorMiddleware)
    
app.listen(3000)