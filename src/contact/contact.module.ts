import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './contact.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Contact])]
})
export class ContactModule {}