import { AppDataSource } from "../../data-source"
import { Ong } from "../../entities/ong.entity"

const ongListService = async (): Promise<Ong[]> => {
    const ongRepository = AppDataSource.getRepository(Ong);

    const ongs = await ongRepository.find()

    return ongs
}

export default ongListService;
