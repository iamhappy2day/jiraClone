import express from 'express';
import { UserController } from './userController';
import { catchErrors } from '../../errors/errorHandler';

export const userRouter = express.Router();
const userController = new UserController();

userRouter
  .route('/')
  .get(catchErrors(userController.getAllUsers))
  .post(catchErrors(userController.createUser));

userRouter
  .route('/:id')
  .get(catchErrors(userController.getUserById))
  .put(catchErrors(userController.updateUser))
  .delete(catchErrors(userController.deleteUser));
