import { Request, Response, NextFunction } from "express";
import  Jwt  from "jsonwebtoken";
import "dotenv/config";


const ensureOngAuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers.authorization;
    

    if(!token) {
        return res.status(401).json({
            message: "Invalid Token"
        })
    }

    token = token.split(' ')[1];

    

    console.log(token)
    Jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
        if(error){
            return res.status(401).json({
                message: "Invalid token"
            })
        }
        req.ong = {
            isOngAdm : decoded.isOngAdm,
            id: decoded.id
        }
        return next()
    })
}

export default ensureOngAuthMiddleware;