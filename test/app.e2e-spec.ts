import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { SnacksModule } from '../src/snacks/snacks.module';
import { SnacksService } from '../src/snacks/snacks.service';
import { SnackModel } from '../src/snacks/snacks.interface';

const assert = require('assert');

describe('SnacksController (e2e)', () => {
  let app: INestApplication;
  let snacksService: SnacksService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [SnacksModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/snacks (GET)', () => {
    return request(app.getHttpServer())
      .get('/snacks')
      .expect(200)
      .then((response) => {
        const snacksReponse: Array<SnackModel> = response.body;
        console.log(snacksReponse);
        assert(snacksReponse.length == 4);
      });
  });

  it('/snacks/1 (GET)', () => {
    return request(app.getHttpServer())
      .get('/snacks/1')
      .expect(200)
      .then((response) => {
        const singleSnack: SnackModel = response.body;
        assert(singleSnack.id === 1);
        console.log(singleSnack);
        console.log(`singleSnack.id = ${singleSnack.id}`);
        // assert(snacksReponse.length == 1);
      });
  });
});
