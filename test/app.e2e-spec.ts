import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { SnacksModule } from '../src/snacks/snacks.module';

describe('SnacksController (e2e)', () => {
  let app: INestApplication;

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
      .expect(200);
  });
});
