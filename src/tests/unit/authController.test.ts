import { AuthController } from '../../components/auth/authController';
import { AuthService } from '../../components/auth/authService';
import * as newUser from '../mock-data/newUser.json';
import express, {
  NextFunction,
  Request,
  Response
} from 'express';
import * as httpMocks from 'node-mocks-http';

const authController = new AuthController();
const authService = new AuthService();

let req: Request, res: Response, next: NextFunction;

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn() as express.NextFunction;
});

authService.createUser = jest.fn();

describe('Authentication', () => {
  it('should call User.create on authService', () => {
    req.body = newUser;
    authService.createUser(req.body);
    expect(authService.createUser).toBeCalledWith(newUser);
  });
});
