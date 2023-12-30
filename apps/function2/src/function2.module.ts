import { Module } from '@nestjs/common';
import { Function2Controller } from './function2.controller';
import { Function2Service } from './function2.service';

@Module({
  imports: [],
  controllers: [Function2Controller],
  providers: [Function2Service],
})
export class Function2Module {}
