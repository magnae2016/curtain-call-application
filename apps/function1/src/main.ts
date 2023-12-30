import { HttpStatus } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Callback, Context, Handler } from 'aws-lambda';
import { Function1Module } from './function1.module';
import { Function1Service } from './function1.service';

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  const appContext =
    await NestFactory.createApplicationContext(Function1Module);
  const appService = appContext.get(Function1Service);

  return {
    body: appService.getHello(),
    statusCode: HttpStatus.OK,
  };
};
