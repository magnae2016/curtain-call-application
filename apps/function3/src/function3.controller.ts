import { Controller, Get } from '@nestjs/common';
import { Function3Service } from './function3.service';

@Controller('function3')
export class Function3Controller {
  constructor(private readonly function3Service: Function3Service) {}

  @Get()
  getHello(): string {
    return this.function3Service.getHello();
  }
}
