import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import ongDeleteservice from "../../services/ong/ongDelete.service";


const ongDeleteController = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        await ongDeleteservice(id);

        return res.status(204).send();
    } catch (error) {
        if(error instanceof AppError) {
            if(error.message.includes("ong")){
                return res.status(404).json({
                    message: "Ong not foundinvalid",
                })
            } else {
                return res.status(400).json({
                    message: error.message,
                });
            }
        }
    }
    
};

export default ongDeleteController;
