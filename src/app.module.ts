import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilekitaModule } from './filekita/filekita.module';
import { ContactModule } from './contact/contact.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

// import 'dotenv/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    FilekitaModule,
    UsersModule,
    ContactModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
