import { Request, Response } from "express";
import petCreateService from "../../services/pets/petCreate.service";

const petCreatecontroller = async (req: Request, res: Response) => {
    const pet = req.body
    
    const createdPet = await petCreateService(pet);

    return res.status(201).json(createdPet)
}

export default petCreatecontroller;