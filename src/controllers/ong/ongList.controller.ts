import { Request, Response } from "express";
import ongListService from "../../services/ong/ongList.service";
import { instanceToPlain } from "class-transformer"

const ongListController = async (req: Request, res: Response) => {
    const ongs = await ongListService();

    return res.json(instanceToPlain(ongs))
}
export default ongListController;