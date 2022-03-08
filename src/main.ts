import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

const port = process.env.PORT;
const db_connection = process.env.DATABASE_CONNECTION;
const db_name = process.env.DATABASE_NAME;

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  await app.listen(3000);
  Logger.log(`jalan di localhost:${port}`, 'Running port');

  Logger.log(`DATABASE CONNECTION ${db_connection}`);
  Logger.log(`DATABASE NAME ${db_name}`);
}
bootstrap();