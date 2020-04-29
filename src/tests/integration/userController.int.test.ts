import request from 'supertest';
import { sequelize, server } from '../../server';
import 'jest-extended';

const endpointURL = '/api/v1/users/';

afterAll(function() {
  sequelize.close();
});
afterEach(async () => {
  await server.close();
});

let response;

describe('GET ALL USERS', () => {
  it('should return responce with status 200', async () => {
     response = await request(server).get(endpointURL);
    expect(response.status).toEqual(200);
    expect(response.body).toBeArray()
  },);
});
