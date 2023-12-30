import { Injectable } from '@nestjs/common';

@Injectable()
export class Function3Service {
  getHello(): string {
    return 'Hello World!333';
  }
}
