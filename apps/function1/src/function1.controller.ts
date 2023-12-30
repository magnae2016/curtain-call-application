import { Controller, Get } from '@nestjs/common';
import { Function1Service } from './function1.service';

@Controller()
export class Function1Controller {
  constructor(private readonly function1Service: Function1Service) {}

  @Get()
  getHello(): string {
    return this.function1Service.getHello();
  }
}
