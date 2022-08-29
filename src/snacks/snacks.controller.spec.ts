import { Test, TestingModule } from '@nestjs/testing';
import { SnacksController } from './snacks.controller';
import { SnacksService } from './snacks.service';
import { SnackModel } from './snacks.interface';

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
      // TODO: implement proper test later
      expect(snacksController.findAll()).not.toStrictEqual([]);
    });
  });

  describe('GET /snacks/:id', () => {
    it('should return one snack', () => {
      const expectedSnack: SnackModel = {
        id: 1,
        name: 'Bounty',
        kcalPer100g: 470,
        priceInEuro: 1,
      };
      expect(snacksController.findById(1)).toStrictEqual(expectedSnack);
    });
  });
});
