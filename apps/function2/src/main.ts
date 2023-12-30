import { HttpStatus } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Callback, Context, Handler } from 'aws-lambda';
import { Function2Module } from './function2.module';
import { Function2Service } from './function2.service';

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  const appContext =
    await NestFactory.createApplicationContext(Function2Module);
  const appService = appContext.get(Function2Service);

  return {
    body: appService.getHello(),
    statusCode: HttpStatus.OK,
  };
};
