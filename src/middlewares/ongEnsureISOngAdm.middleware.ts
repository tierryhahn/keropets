import { Request, Response, NextFunction } from "express";

const ongEnsureIsOngAdmMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { isOngAdm } = req.ong;

    if(!isOngAdm) {
        return res.status(403).json({
            message: "Ong is not admin"
        })
    }

    return next();
}

export default ongEnsureIsOngAdmMiddleware;