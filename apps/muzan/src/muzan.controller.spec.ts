import { Test, TestingModule } from '@nestjs/testing';
import { MuzanController } from './muzan.controller';
import { MuzanService } from './muzan.service';

describe('MuzanController', () => {
  let muzanController: MuzanController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MuzanController],
      providers: [MuzanService],
    }).compile();

    muzanController = app.get<MuzanController>(MuzanController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(muzanController.getHello()).toBe('Hello World!');
    });
  });
});
