import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Ong } from "../../entities/ong.entity";

const ongDeleteservice = async (id: string) => {
    const ongRepository = AppDataSource.getRepository(Ong);

    const findOng = await ongRepository.findOneBy({
        id
    });

    if(!findOng) {
        throw new AppError("Ong not found")
    }

    if(findOng.isActive === false) {
        throw new AppError("Missing authorization")
    }

    await ongRepository.update(id, {
        isActive: false,
    })
}

export default ongDeleteservice;