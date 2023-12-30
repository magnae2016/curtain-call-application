import { NestFactory } from '@nestjs/core';
import { Function2Module } from './function2.module';

async function bootstrap() {
  const app = await NestFactory.create(Function2Module);
  await app.listen(3000);
}
bootstrap();
