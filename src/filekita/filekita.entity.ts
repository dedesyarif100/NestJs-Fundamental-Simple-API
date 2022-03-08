// const { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } = require("typeorm");

import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FileKita {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    nama: string;

    @Column('text')
    deskripsi: string;

    @Column()
    isPublik: boolean;
}