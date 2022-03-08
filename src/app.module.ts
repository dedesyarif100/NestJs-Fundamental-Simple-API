import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilekitaModule } from './filekita/filekita.module';
import { UsersModule } from './users/users.module';
import { ContactModule } from './contact/contact.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from './shared/http-error.filter';

// import 'dotenv/config';

@Module({
  imports: [
  TypeOrmModule.forRoot(),
    FilekitaModule,
    UsersModule,
    ContactModule
  ],
  controllers: [AppController],
  providers: [
    AppService, {
      provide: APP_FILTER,
      useClass: HttpErrorFilter
    }
  ],
})
export class AppModule {}