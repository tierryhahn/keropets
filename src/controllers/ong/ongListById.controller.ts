import { Request, Response } from "express";
import ongListByIdService from "../../services/ong/ongListById.service";

const ongListByIdController = async (req: Request, res: Response) => {
    const { id } = req.params;

    const onglisted = await ongListByIdService(id);

    return res.status(200).json(onglisted)
}

export default ongListByIdController