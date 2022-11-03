import { Request, Response } from "express";
import ongCreateService from "../../services/ong/ongCreate.service";
import { instanceToPlain } from "class-transformer";

const ongCreateController = async (req: Request, res: Response) => {
    const ongData = req.body;

    const createdOng = await ongCreateService(ongData);

    return res.status(201).json(instanceToPlain(createdOng));
};

export default ongCreateController;
