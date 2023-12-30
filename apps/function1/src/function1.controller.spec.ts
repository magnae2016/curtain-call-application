import { Test, TestingModule } from '@nestjs/testing';
import { Function1Controller } from './function1.controller';
import { Function1Service } from './function1.service';

describe('Function1Controller', () => {
  let function1Controller: Function1Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Function1Controller],
      providers: [Function1Service],
    }).compile();

    function1Controller = app.get<Function1Controller>(Function1Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(function1Controller.getHello()).toBe('Hello World!');
    });
  });
});
