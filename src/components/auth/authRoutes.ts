import express from 'express';
import { AuthController } from './authController';
import { catchErrors } from '../../errors/errorHandler';
const authController = new AuthController();
export const authRouter = express.Router();

authRouter
  .route('/signup')
  .post(catchErrors(authController.createUser));
authRouter
  .route('/signin')
  .post(catchErrors(authController.userLogin));
