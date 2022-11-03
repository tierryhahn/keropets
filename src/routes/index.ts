import { Express } from 'express'
import { userRoutes } from "./user.routes";
    
export const appRoutes = (app: Express) => {

    app.use("/users", userRoutes());
    
} 