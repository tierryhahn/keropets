import jwt from "jsonwebtoken";
import "dotenv/config";
import { NextFunction, Request, Response } from "express";

const ongEnsureAuthUpdateMiddleware = (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers.authorization;

    const { id } = req.params;

    if(!token){
        return res.status(401).json({message: "Missing authorization headers"});

    }
    token = token.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
        if(error){
            return res.status(404).json({message: "Invalid token"});
        } else if(!decoded.isOngAdm && id !== decoded.sub) {
            return res.status(401).json({message: "Missing admin permissions"})
        }

        next()
    })
}
export default ongEnsureAuthUpdateMiddleware