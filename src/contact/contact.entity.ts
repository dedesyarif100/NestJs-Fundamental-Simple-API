import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    email: string;

    @Column('text')
    address: string;

    @Column()
    phone_number: number;
}