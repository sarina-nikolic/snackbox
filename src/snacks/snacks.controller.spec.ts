import { Test, TestingModule } from '@nestjs/testing';
import { SnacksController } from './snacks.controller';
import { SnacksService } from './snacks.service';

describe('SnacksController', () => {
  let snacksController: SnacksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SnacksController],
      providers: [SnacksService],
    }).compile();

    snacksController = app.get<SnacksController>(SnacksController);
  });

  describe('GET /snacks', () => {
    it('should return all snacks', () => {
      expect(snacksController.findAll()).toStrictEqual([]);
    });
  });
});
