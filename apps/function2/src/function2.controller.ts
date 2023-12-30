import { Controller, Get } from '@nestjs/common';
import { Function2Service } from './function2.service';

@Controller()
export class Function2Controller {
  constructor(private readonly function2Service: Function2Service) {}

  @Get()
  getHello(): string {
    return this.function2Service.getHello();
  }
}
