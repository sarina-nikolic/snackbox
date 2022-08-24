import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './snacks.controller';
import { AppService } from './snacks.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World! -- Sarina"', () => {
  
      expect(appController.getHello()).toBe('Hello World! -- Sarina');
    });
  });
});
