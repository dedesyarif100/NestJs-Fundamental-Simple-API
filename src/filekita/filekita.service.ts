import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileKita } from './filekita.entity';
import { FilekitaDTO } from './filekita.dto';

@Injectable()
export class FilekitaService {
    constructor(
        @InjectRepository(FileKita)
        private filekitaRepository: Repository<FileKita>
    ){}

    async showAll() {
        return await this.filekitaRepository.find();
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