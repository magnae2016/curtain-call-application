import { NestFactory } from '@nestjs/core';
import { Function1Module } from './function1.module';

async function bootstrap() {
  const app = await NestFactory.create(Function1Module);
  await app.listen(3000);
}
bootstrap();
