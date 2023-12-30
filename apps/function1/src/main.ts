import { NestFactory } from '@nestjs/core';
import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { Function1Module } from './function1.module';
import { Function1Service } from './function1.service';

export const handler: Handler = async (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
) => {
  const appContext =
    await NestFactory.createApplicationContext(Function1Module);
  const appService = appContext.get(Function1Service);

  return appService.createUser(event);
};
