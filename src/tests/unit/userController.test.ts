import { UserController } from '../../components/users/userController';

import { NextFunction, Request, Response } from 'express';
import * as httpMocks from 'node-mocks-http';
import express from 'express';

import * as newUser from '../mock-data/newUser.json';
import { UserService } from '../../components/users/userService';
import exp from 'constants';

const userController = new UserController();
const userService = new UserService();

userService.getAllUsers = jest.fn();

let req: Request, res: Response, next: NextFunction;

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn() as express.NextFunction;
});

describe('userController', () => {
  it('should have RUD functions', () => {
    expect(typeof userController.getAllUsers).toBe(
      'function'
    );
    expect(typeof userController.getUserById).toBe(
      'function'
    );
    expect(typeof userController.deleteUser).toBe(
      'function'
    );
    expect(typeof userController.updateUser).toBe(
      'function'
    );
  });

  it('should call userService on userController', () => {
    userController.getAllUsers(req, res);
    expect(userService.getAllUsers).toBeCalled;
  });
  it('should return response with status 200 and all users', async () => {
    await userService.getAllUsers();
    expect(res.statusCode).toBe(200);
  });
});
