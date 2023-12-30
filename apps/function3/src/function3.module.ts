import { Module } from '@nestjs/common';
import { Function3Controller } from './function3.controller';
import { Function3Service } from './function3.service';

@Module({
  imports: [],
  controllers: [Function3Controller],
  providers: [Function3Service],
})
export class Function3Module {}
