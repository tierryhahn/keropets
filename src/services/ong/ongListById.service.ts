import { AppDataSource } from "../../data-source";
import { Ong } from "../../entities/ong.entity";
import { AppError } from "../../errors/appError";


const ongListByIdService = async (id: string): Promise<Object> => {
    
    const ongRepository = AppDataSource.getRepository(Ong);

    const ong = await ongRepository.findOneBy({id: id})

    if(!ong){
        throw new AppError("Ong does not exist", 404)
    }

    return ong

}

export default ongListByIdService;