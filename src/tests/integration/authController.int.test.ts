import request from 'supertest';
import { app } from '../../app';
import * as newUser from '../mock-data/newUser.json';


const endpointURL = '/api/v1/auth/signup/';
const endpointURL2 = '/api/v1/users/';

describe(endpointURL2, () => {
  // it('POST' + endpointURL, async () => {
  //   const response = await request(app)
  //     .post(endpointURL)
  //     .send(newUser);
  //   expect(response.status).toBe(201);
  //   expect(response.body.email).toBe(newUser.email);
  //   expect(response.body.password).toBe(newUser.password);
  // }, 30000);

  test("GET ALL USERS", async () => {
    const response = await request('http://localhost:3000/api/v1/users/');
    console.log(response)
    expect( typeof response).toBe('array')
  })
});
