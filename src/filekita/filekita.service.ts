import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { FileKita } from './filekita.entity';
import { FilekitaDTO } from './filekita.dto';

@Injectable()
export class FilekitaService {
    constructor(
        @InjectRepository(FileKita)
        private filekitaRepository: Repository<FileKita>
    ){}

    async showAll(page: number, limit: number, offset: number) {
        // console.log(this.filekitaRepository.find());
        // console.log(page, limit, offset);
        // console.log((await this.filekitaRepository.find()).length);

        let data = await this.filekitaRepository.findAndCount({take: limit, skip: offset});
        let total_data = data[1];
        let total_page = Math.ceil(total_data / 10);
        let current_page = page;
        let last_page = null;
        let next_page = (await this.filekitaRepository.find()).length / 1;
        // const dataResponse =  data[0];

        console.log('-------------------');
        // const dataResponse =  await this.filekitaRepository.find({ select: ["id"] });
        // const dataResponse =  await this.filekitaRepository.find({ where: [
        //     { nama: "DHARMA", isPublik: 1 }
        // ] });

        // const dataResponse = await this.filekitaRepository.find({
        //     order: {
        //         nama: "DESC"
        //     }
        // });
        // const dataResponse =  await this.filekitaRepository.find({ 
        //     take: 3, 
        //     skip: 2, 
        //     order: {
        //         id: 'DESC'
        //     },
        // });

        // QUERY BUILDER =====================================
        // const dataResponse =  await this.filekitaRepository.find({ cache: true });
        // const dataResponse = await getConnection().getRepository(FileKita).createQueryBuilder("file kita").take(2).getMany();
        const dataResponse = await getConnection().getRepository(FileKita).createQueryBuilder("data").where("data.isPublik = :isPublik", { isPublik: 0 }).getOne();

        return {
            dataResponse,
            total_page,
            total_data,
            current_page,
            last_page,
            next_page
        }
    }

    async create(data: FilekitaDTO) {
        const filekitaNew = await this.filekitaRepository.create(data);
        await this.filekitaRepository.save(filekitaNew);
        return filekitaNew;
    }

    async lihatSemua() {
        return "ini di service";
    }

    async lihatPerRecord(id: string) {
        return await this.filekitaRepository.findOne({ where: {id} })
    }

    async update(id: string, data: Partial<FilekitaDTO>) {
        await this.filekitaRepository.update(id, data)
        return await this.filekitaRepository.findOne({ where: {id} })
    }

    async hapusData(id: string) {
        await this.filekitaRepository.delete(id)
        return {deleted: true}
    }
}