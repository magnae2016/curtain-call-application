import { NestFactory } from '@nestjs/core';
import { Function3Module } from './function3.module';

async function bootstrap() {
  const app = await NestFactory.create(Function3Module);
  await app.listen(3000);
}
bootstrap();
