import { Module } from '@nestjs/common';
import { Function1Controller } from './function1.controller';
import { Function1Service } from './function1.service';

@Module({
  imports: [],
  controllers: [Function1Controller],
  providers: [Function1Service],
})
export class Function1Module {}
