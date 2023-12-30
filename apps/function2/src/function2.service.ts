import { Injectable } from '@nestjs/common';

@Injectable()
export class Function2Service {
  getHello(): string {
    return 'Hello World!';
  }
}
