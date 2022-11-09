import { Request, Response } from "express";
import { Ong } from "../../entities/ong.entity";
import { AppError } from "../../errors/appError";
import ongUpdateService from "../../services/ong/ongUpdate.service";
import { instanceToPlain } from "class-transformer";


const ongUpdateController = async(req: Request, res: Response) => {
    const ong = req.body;
    const id = req.params.id;

    const bodyKeys = Object.keys(req.body);
    if(
        bodyKeys.includes("isActive") ||
        bodyKeys.includes("id") ||
        bodyKeys.includes("isOng") ||
        bodyKeys.includes("isOngAdm")
    ) {
        throw new AppError("Can not update this field", 401)
    }

    const updatedOng = await ongUpdateService(ong, id);

    return res.status(200).json(instanceToPlain(updatedOng))
}

export default ongUpdateController