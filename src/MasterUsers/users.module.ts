import { Module } from '@nestjs/common';
import { Users } from './users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    imports: [TypeOrmModule.forFeature([Users]), ],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {}