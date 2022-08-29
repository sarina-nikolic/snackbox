import { Test, TestingModule } from '@nestjs/testing';
import { SnacksController } from './snacks.controller';
import { SnacksService } from './snacks.service';
import { SnackModel } from './snacks.interface';
import { NotFoundException } from '@nestjs/common';

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

  describe('POST /snacks', () => {
    it('should create a new snack', () => {
      const newSnack: SnackModel = {
        id: 5,
        name: 'KitKat',
        kcalPer100g: 570,
        priceInEuro: 2,
      };
      // TODO: implement proper test that verifies the actual value, i.e. id === 5
      expect(snacksController.create(newSnack)).toStrictEqual(newSnack);
    });
  });

  describe('DELETE /snacks', () => {
    it('should delete a snack', () => {
      expect(snacksController.delete(3)).toBeUndefined();
    });

    it('should not delete non-existent snack (returns HTTP status code 422)', () => {
      try {
        snacksController.delete(2022);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
