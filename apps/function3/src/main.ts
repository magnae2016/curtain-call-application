import { HttpStatus } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Callback, Context, Handler } from 'aws-lambda';
import { Function3Module } from './function3.module';
import { Function3Service } from './function3.service';

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  const appContext =
    await NestFactory.createApplicationContext(Function3Module);
  const appService = appContext.get(Function3Service);

  return {
    body: appService.getHello(),
    statusCode: HttpStatus.OK,
  };
};
