import express from 'express';
import { UserController } from './userController';

export const userRouter = express.Router();
const userController = new UserController();

userRouter
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

userRouter
  .route('/:id')
  .get(userController.getUserById)
  .put(userController.updateUser)
  .delete(userController.deleteUser);
