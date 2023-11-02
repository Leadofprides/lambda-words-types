import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app/app.module';

describe('Words Types E2E Tests', () => {
  let app: INestApplication;
  let expectedResult: object;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    expectedResult = {
      noun: 2,
      verb: 1,
      adjective: 0,
      adverb: 0,
      preposition: 0,
      conjunction: 0,
      pronoun: 0,
      interjection: 2,
      determiner: 0,
      numeral: 0,
    };

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Should return counters of each type of word', () => {
    const inputText: object = {
      text: 'cat car work wow wow',
    };

    return request(app.getHttpServer())
      .post('/words-types')
      .send(inputText)
      .expect(200)
      .then((response) => {
        expect(response.body).toBeDefined();
        expect(response.body).toStrictEqual(expectedResult);
      });
  });

  it('Should return counters of each type of word even if they are in UPPER case', () => {
    const inputText: object = {
      text: 'CAT CAR WORK WOW WOW',
    };

    return request(app.getHttpServer())
      .post('/words-types')
      .send(inputText)
      .expect(200)
      .then((response) => {
        expect(response.body).toBeDefined();
        expect(response.body).toStrictEqual(expectedResult);
      });
  });
});
