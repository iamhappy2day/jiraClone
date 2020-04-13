import { Response, Request, NextFunction } from 'express';
import { UserService } from './userService';
import User from '../../models/user.model';
import { AppError } from '../../errors/errorHandler';
const userService = new UserService();

export class UserController {
  async getAllUsers(req: Request, res: Response) {
    const users = await userService.getAllUsers();
    res.status(200).send(users);
  }

  async getUserById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const targetUser = await userService.getUserById(
      req.params.id
    );
    if (!targetUser) {
      return next(
        new AppError('No user with that ID', 404)
      );
    }
    res.status(200).send(targetUser);
  }

  async createUser(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const newUser = await User.create({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name
    });

    res.status(201).send(newUser);
  }

  async updateUser(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const updatedUser = await userService.updateUser(
      req.params.id,
      req.body
    );
    if (!updatedUser) {
      return next(
          new AppError('No user with that ID', 404)
      );
    }
    res.status(200).send(updatedUser);
  }

  async deleteUser(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const deletedUser = await userService.deleteUser(
      req.params.id
    );
    if (!deletedUser) {
      return next(
        new AppError('No user with that ID', 404)
      );
    }
    res.status(200).send({
      status: 'successfull',
      deletedUser
    });
  }
}
