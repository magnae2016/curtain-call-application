import { Test, TestingModule } from '@nestjs/testing';
import { Function2Controller } from './function2.controller';
import { Function2Service } from './function2.service';

describe('Function2Controller', () => {
  let function2Controller: Function2Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Function2Controller],
      providers: [Function2Service],
    }).compile();

    function2Controller = app.get<Function2Controller>(Function2Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(function2Controller.getHello()).toBe('Hello World!');
    });
  });
});
