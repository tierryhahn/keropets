import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Ong } from "../../entities/ong.entity";

const ongDeleteservice = async (id: string): Promise<void> => {
    const ongRepository = AppDataSource.getRepository(Ong);
    
    
    const findOng = await ongRepository.findOneBy({
        id
    });
    console.log(findOng);

    if(!findOng) {
        throw new AppError("Ong not found")
    }

    if(findOng.isActive === false) {
        throw new AppError("Missing authorization")
    }

    await ongRepository.update(id, {
        isActive: false,
    })

    const findOng2 = await ongRepository.findOneBy({
        id: findOng.id
    });
    console.log(findOng2);
    
}

export default ongDeleteservice;