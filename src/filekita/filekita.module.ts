import { Module } from '@nestjs/common';
import { FileKita } from './filekita.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilekitaController } from './filekita.controller';
import { FilekitaService } from './filekita.service';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
    imports: [TypeOrmModule.forFeature([FileKita]), AuthModule],
    controllers: [FilekitaController],
    providers: [
        FilekitaService,
        // {
        //     provide: APP_GUARD,
        //     useClass: JwtAuthGuard,
        // },
    ],
    exports: [FilekitaService]
})
export class FilekitaModule {}
