import { Test, TestingModule } from '@nestjs/testing';
import { Function3Controller } from './function3.controller';
import { Function3Service } from './function3.service';

describe('Function3Controller', () => {
  let function3Controller: Function3Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Function3Controller],
      providers: [Function3Service],
    }).compile();

    function3Controller = app.get<Function3Controller>(Function3Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(function3Controller.getHello()).toBe('Hello World!');
    });
  });
});
