import { Request, Response } from "express";
import sessionCreateService from "../../services/ong/session/sessionCreate.service";

const sessionCreateController = async (req: Request, res: Response) => {
    
        const data = req.body;
        const token = await sessionCreateService(data);
        return res.json({token}) 
  
}

export default sessionCreateController