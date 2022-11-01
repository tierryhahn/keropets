import { Request, Response } from "express";
import ongCreateService from "../../services/ong/ongCreate.service";

const ongCreateController = async (req: Request, res: Response) => {
    const ongData = req.body;

    const createdOng = await ongCreateService(ongData);

    return res.status(201).json(createdOng);
};

export default ongCreateController;
